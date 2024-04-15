import { Injectable, Logger } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangePasswordRequest } from './request/change-password.request';
import ApiResponse from 'src/api.response';
import * as bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from '@prisma/client/runtime/library';
import UserProfileDto from './dto/user-profile.dto';

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
    Logger.log('change user {0} password ', request.email);
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

      Logger.log('user {0} password changed', request.email);
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

  async getProfile(userId: string) {
    const id = Number(userId);
    const user = await this.prismaService.user.findFirst(
      {
        where: {
          id: id
        }
      }
    );

    if (!user)
      return <ApiResponse<any>>{
        message: "Id de l'utilisateur est invalid",
        success: false
      };

    const result = <UserProfileDto>{ ...user };

    return <ApiResponse<UserProfileDto>>{
      message: "Success",
      success: true,
      data: result
    };

  }

  async updateProfile(id: any, updated: UserProfileDto) {
    Logger.log('update  user profile {0} ', id);
    const userId = Number(id);
    const user = await this.prismaService.user.findFirst(
      {
        where: {
          id: userId
        }
      }
    );

    if (!user)
      return <ApiResponse<any>>{
        message: "Id de l'utilisateur est invalid",
        success: false
      };
    
      await this.prismaService.user.update(
        {
          where:{
            id: userId,
          },
          data:{
            email: updated.email,
            fullname: updated.fullname,
            phone: updated.phone,
            
          }
        }
      );

      Logger.log('user profile {0} updpated ', id);
      return <ApiResponse<any>>{
        message: "Profile enregistrer!",
        success: true
      };
  }

}
