import { Body, Controller, HttpException, HttpStatus, Logger, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from './public.decorator';
import { Response } from 'express';
import { CurrentUser } from './current-user.decorator';
import { UserLoginDto } from './dto/user-login.dto';
import { UserSignUpDto } from './dto/user-signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signin(@CurrentUser() user:any ,@Res({ passthrough: true }) response: Response) {
        const result = await this.authService.signin(user,response);
        if(!result.success) throw new HttpException(result.message,HttpStatus.INTERNAL_SERVER_ERROR);

        return result;
    }

    @Public()
    @Post('signup')
    async signup(@Body() data: UserSignUpDto) {
        const result = await this.authService.signup(data);
        if(!result.success) throw new HttpException(result.message,HttpStatus.INTERNAL_SERVER_ERROR);

        return result;
    }

}
