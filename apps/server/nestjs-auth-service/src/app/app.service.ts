import { LoginDto, TUser } from '@food-blog/interfaces';
import { NestjsUserLibService } from '@food-blog/nestjs-user-lib';
import { User } from '@food-blog/nestjs-user-lib/schema/user.schema';
import { Injectable } from '@nestjs/common';
import { NestjsAuthLibService } from '@food-blog/nestjs-auth-lib';

@Injectable()
export class AppService {
  constructor(
    private nestjsUserService: NestjsUserLibService,
    private nestjsAuthService: NestjsAuthLibService
  ) {}

  async createUser(user: TUser) {
    return await this.nestjsUserService.createUser(user);
  }

  async login(userInput: LoginDto): Promise<User | null> {
    const user = await this.nestjsAuthService.validateUser(userInput);
    if (user) {
      return user;
    }
    return null;
  }
}
