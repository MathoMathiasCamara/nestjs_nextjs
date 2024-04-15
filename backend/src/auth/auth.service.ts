import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserLoginDto } from './dto/user-login.dto';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import ms from 'ms';
import { TokenPayload } from './token-payload.interface';
import { UserSignUpDto } from './dto/user-signup.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import ServerResponse from 'src/api.response';
import ApiResponse from 'src/api.response';
import { JWT_EXPIRATION_TIME } from 'src/constants';
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from '@prisma/client/runtime/library';


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private prismaService: PrismaService
    ) { }

    async signin(user: any, response: Response): Promise<ApiResponse<any>> {
        const expires = new Date();
        expires.setMilliseconds(
            expires.getMilliseconds() +
            ms(JWT_EXPIRATION_TIME),
        );

        const tokenPayload: TokenPayload = {
            userId: user.id,
        };
        const token = this.jwtService.sign(tokenPayload);
        response.cookie('Authentication', token, {
            secure: true,
            httpOnly: true,
            expires,
        });

        Logger.log('use signed in with tokenpayload :',tokenPayload);

        return <ApiResponse<TokenPayload>>{
            message: 'Utilisateur authentifié',
            success: true,
            data: tokenPayload
        };
    }

    async signup(signupDto: UserSignUpDto) {
        try {
            
            const findByPhone = await this.userService.findByPhone(signupDto.phone);
            if(findByPhone)
                return <ApiResponse<null>>{
                    message: 'Ce Numero de telephone appartient a un autre compte!',
                    success: false,
                }
    
            const findByEmail = await this.userService.findOne(signupDto.email);
            if(findByEmail)
                return <ApiResponse<null>>{
                    message: 'Ce Email appartient a un autre compte!',
                    success: false,
                }

            const hash = await bcrypt.hashSync(signupDto.password, Number(process.env.PASSWORD_SALT_ROUNDS));
            const user = await this.prismaService.user.create({
                data: {
                    email: signupDto.email,
                    phone: signupDto.phone,
                    fullname: signupDto.name,
                    hash: hash
                }
            });

            if (!user.id)
                return <ApiResponse<null>>{
                    message: 'Compte non enregistrer!',
                    success: false,
                }

            return <ApiResponse<null>>{
                message: 'Compte enregistrer!',
                success: true,
            }

        } catch (error) {
            Logger.error(error);

            const prismaError = <PrismaClientKnownRequestError | PrismaClientUnknownRequestError>error;       
            if(prismaError)
                return <ApiResponse<PrismaClientKnownRequestError | PrismaClientUnknownRequestError>>{
                    message: prismaError.message,
                    success: false,
                    data: prismaError
                }

            return <ApiResponse<null>>{
                message: error.message,
                success: false,
            }
        }
    }


    async validateUser(username: string, pass: string): Promise<ApiResponse<any>> {
        try {
            const user = await this.userService.findOne(username);
            const authenticated = await bcrypt.compare(pass, user.hash);
            if (!authenticated) {
                throw new UnauthorizedException('Credentials are not valid.');
            }

            const {...result } = user;
            return <ApiResponse<any>>{
                message: 'Success!',
                success: true,
                data: result,
            }
        } catch (error) {
            throw new UnauthorizedException('Credentials are not valid.');
        }

    }
}
