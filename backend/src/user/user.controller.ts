import { Body, Controller, Get, Logger, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TokenPayload } from 'src/auth/token-payload.interface';
import { ChangePasswordRequest } from './request/change-password.request';
import { UserService } from './user.service';
import { Public } from 'src/auth/public.decorator';
import UserProfileDto from './dto/user-profile.dto';
import { use } from 'passport';


@Controller('users')
export class UserController {

  constructor(private userService: UserService) {

  }

  @Get('me')
  getMe(@CurrentUser() user: TokenPayload) {
    return user;
  }

  @Get('profile/:id')
  getProfile(@Param() params: any) {
    const result = this.userService.getProfile(params.id);

    return result;
  }

  @Put('profile/:id')
  updateProfile(@Param() params: any,@Body() updated: UserProfileDto) {
    return this.userService.updateProfile(params.id,updated);
  }


  @Public()
  @Post('change-password')
  changePassword(@Body() request: ChangePasswordRequest) {
    return this.userService.changePassword(request);
  }
}
