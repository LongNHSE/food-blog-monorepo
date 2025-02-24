import { NestjsUserLibService } from '@food-blog/nestjs-user-lib';
import { User } from '@food-blog/nestjs-user-lib/schema/user.schema';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class NestjsAuthLibService {
  constructor(private nestjsUserLibService: NestjsUserLibService) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.nestjsUserLibService.getUserByUsername(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  }
}
