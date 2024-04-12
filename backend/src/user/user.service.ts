import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
 constructor(private prismaService: PrismaService){

 }

      async findOne(username: string): Promise<User | undefined> {
        return this.prismaService.user.findFirst({
          where: {
            email:{
              equals: username
            }
          }
        });
      }
}
