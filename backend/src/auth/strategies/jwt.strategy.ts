import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { TokenPayload } from '../token-payload.interface';
import { JWT_SECRET_KEY } from 'src/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request.cookies?.Authentication;
        },
      ]),
      secretOrKey: JWT_SECRET_KEY,
    });
  }

  validate(payload: TokenPayload) {
    console.log('validating payload!');
    return payload;
  }
}