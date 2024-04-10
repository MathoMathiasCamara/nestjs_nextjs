import { Controller, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from './public.decorator';
import { Response } from 'express';
import { CurrentUser } from './current-user.decorator';
import { UserLoginDto } from './dto/userlogindto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('signin')
    signin(@CurrentUser() user:any ,@Res({ passthrough: true }) response: Response) {
        return this.authService.signin(user,response);
    }

    @Post('signup')
    signup() {
        return this.authService.signup();
    }

}
