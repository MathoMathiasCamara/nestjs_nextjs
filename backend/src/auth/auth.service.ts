import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserLoginDto } from './dto/userlogindto';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import ms from 'ms';
import { TokenPayload } from './token-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async signin(user: any, response: Response) {
        const expires = new Date();
        expires.setMilliseconds(
            expires.getMilliseconds() +
            ms(process.env.JWT_EXPIRATION_TIME),
        );

        const tokenPayload: TokenPayload = {
            userId: user.userId,
        };
        const token = this.jwtService.sign(tokenPayload);
        response.cookie('Authentication', token, {
            secure: true,
            httpOnly: true,
            expires,
        });

        return { tokenPayload };
    }

    signup() {
        return "Signed up!";
    }

    async validateUser(username: string, pass: string): Promise<any> {
        try {
            const user = await this.userService.findOne(username);
            //const authenticated = await bcrypt.compare(pass, user.password);
            // if (!authenticated) {
            //     throw new UnauthorizedException();
            // }
            
            //TODO: remove this when signup feature is added
            if (!user) {
                throw new UnauthorizedException();
            }


            const { password, ...result } = user;
            return result;
        } catch (error) {
            throw new UnauthorizedException('Credentials are not valid.');
        }

    }
}
