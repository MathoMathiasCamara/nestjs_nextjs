import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger } from '@nestjs/common';
import { TokenPayload } from '../token-payload.interface';
import { JWT_SECRET_KEY } from 'src/constants';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const jwtToken = request.cookies['Authentication'];
          if(!jwtToken) 
            return undefined;
          return jwtToken;
        },
      ]),
      secretOrKey: JWT_SECRET_KEY,
    });
  }

  validate(payload: TokenPayload) {
    return payload;
  }
}