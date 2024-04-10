import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserLoginDto } from './dto/userlogindto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async signin(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };    
    }

    signup() {
        return "Signed up!";
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
