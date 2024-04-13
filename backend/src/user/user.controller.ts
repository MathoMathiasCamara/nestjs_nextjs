import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TokenPayload } from 'src/auth/token-payload.interface';
import { ChangePasswordRequest } from './request/change-password.request';
import { UserService } from './user.service';
import { Public } from 'src/auth/public.decorator';


@Controller('users')
export class UserController {
  
  constructor(private userService: UserService){

  }

    @Get('me')
    @UseGuards(JwtAuthGuard)
    getMe(@CurrentUser() user: TokenPayload) {
      return user;
    }

    @Public()
    @Post('change-password')
    async changePassword(@Body() request: ChangePasswordRequest) {
      Logger.log('change user {0} password ',request.email);
      const result = await this.userService.changePassword(request);
      if(result.success)
      Logger.log('user {0} password changed',request.email);

      return result;
    }
}
