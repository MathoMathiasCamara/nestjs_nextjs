import { Injectable } from '@nestjs/common';
//import { User } from '@prisma/client';

@Injectable()
export class UserService {
    private readonly users = [
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'maria',
          password: 'guess',
        },
      ];

      async findOne(username: string): Promise<UserAccount | undefined> {
        return this.users.find(user => user.username === username);
      }
}

interface UserAccount{
    userId: Number;
    username: string;
    password: string;
}
