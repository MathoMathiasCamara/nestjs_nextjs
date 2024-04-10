import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Public } from './public.decorator';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('signin')
    signin(@Request() req) {
        return this.authService.signin(req.user);
    }

    @Post('signup')
    signup() {
        return this.authService.signup();
    }

}
