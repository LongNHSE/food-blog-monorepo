import { LoginDto } from '@food-blog/interfaces';
import { NestjsUserLibService } from '@food-blog/nestjs-user-lib';
import { User } from '@food-blog/nestjs-user-lib/schema/user.schema';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class NestjsAuthLibService {
  constructor(
    private nestjsUserLibService: NestjsUserLibService,
    private jwtService: JwtService
  ) {}

  async validateUser(userInput: {
    username: string;
    password: string;
  }): Promise<User | null> {
    const { username, password } = userInput;
    const user = await this.nestjsUserLibService.getUserByUsername(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  }

  async generateJwt(user: User) {
    const payload = { username: user.username, sub: user._id };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }
}
