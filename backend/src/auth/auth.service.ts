import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    signin() {
        return "Signed In!";
    }

    signup() {
        return "Signed up!";
    }
}
