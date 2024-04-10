import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guard';
@Module({
  providers: [
    AuthService, 
    LocalStrategy, 
    JwtStrategy, 
    {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }],
  controllers: [AuthController],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.JWT_SECRET_KEY,
        signOptions: { expiresIn: process.env.JWT_EXPIRATION_TIME, },
      }),
    })
  ]
})
export class AuthModule { }
