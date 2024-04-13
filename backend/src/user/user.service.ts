import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangePasswordRequest } from './request/change-password.request';
import ApiResponse from 'src/api.response';
import * as bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {

  constructor(private prismaService: PrismaService) {

  }

  async findOne(username: string): Promise<User | undefined> {
    return this.prismaService.user.findFirst({
      where: {
        email: {
          equals: username
        }
      }
    });
  }

  async findByPhone(phone: string): Promise<User | undefined> {
    return this.prismaService.user.findFirst({
      where: {
        phone: {
          equals: phone
        }
      }
    });
  }

  async changePassword(request: ChangePasswordRequest): Promise<ApiResponse<any>> {

    const user = await this.findOne(request.email);
    if (!user) return <ApiResponse<any>>{
      message: "cet email n'est pas valide",
      success: false
    };

    const hash = await bcrypt.hashSync(request.newPassword, Number(process.env.PASSWORD_SALT_ROUNDS));
    try {
      await this.prismaService.user.update({
        where: {
          email: request.email
        },
        data: {
          hash
        }
      });

      return <ApiResponse<any>>{
        message: "Mot de passe changer avec succes",
        success: true
      };

    } catch (error) {
      const prismaError = <PrismaClientKnownRequestError | PrismaClientUnknownRequestError>error;
      return <ApiResponse<PrismaClientKnownRequestError | PrismaClientUnknownRequestError>>{
        message: "Error lors du changement du mot de passe",
        success: false,
        data: prismaError
      };
    }
  }
}
