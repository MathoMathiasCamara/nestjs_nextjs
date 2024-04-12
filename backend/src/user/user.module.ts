import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
  imports: [PrismaModule]
})
export class UserModule {}
