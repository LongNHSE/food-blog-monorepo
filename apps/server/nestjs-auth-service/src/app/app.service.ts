import { TUser } from '@food-blog/interfaces';
import { NestjsUserLibService } from '@food-blog/nestjs-user-lib';
import { User } from '@food-blog/nestjs-user-lib/schema/user.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private nestjsUserService: NestjsUserLibService) {}

  async createUser(user: TUser) {
    return await this.nestjsUserService.createUser(user);
  }

  login(user: any): User | PromiseLike<User> {
    throw new Error('Method not implemented.');
  }
}
