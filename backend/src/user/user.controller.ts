import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TokenPayload } from 'src/auth/token-payload.interface';

@Controller('users')
export class UserController {
    
    @Get('me')
    @UseGuards(JwtAuthGuard)
    getMe(@CurrentUser() user: TokenPayload) {
      return user;
    }
}
