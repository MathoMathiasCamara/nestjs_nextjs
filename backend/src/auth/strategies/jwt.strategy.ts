import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger } from '@nestjs/common';
import { Request } from 'express';
import { TokenPayload } from '../token-payload.interface';
import { JWT_SECRET_KEY } from 'src/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          Logger.log('backend extracting jwt token from cookie');
          const cookie = request.headers.cookie;
          const jwtToken = cookie?.split('=')[1] ?? undefined;
          if(!jwtToken) return undefined;
          Logger.log('backend extracted jwt token ',jwtToken);
          return jwtToken;
        },
      ]),
      secretOrKey: JWT_SECRET_KEY,
    });
  }

  validate(payload: TokenPayload) {
    console.log('validating payload: {0}!',payload);
    return payload;
  }
}