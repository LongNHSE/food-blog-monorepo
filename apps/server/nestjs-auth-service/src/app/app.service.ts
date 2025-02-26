import {
  apiFailed,
  ApiResponse,
  apiSuccess,
  LoginDto,
  TUser,
} from '@food-blog/interfaces';
import { NestjsUserLibService } from '@food-blog/nestjs-user-lib';
import { User } from '@food-blog/nestjs-user-lib/schema/user.schema';
import { HttpStatus, Injectable } from '@nestjs/common';
import { NestjsAuthLibService } from '@food-blog/nestjs-auth-lib';
import { access } from 'fs';

@Injectable()
export class AppService {
  constructor(
    private nestjsUserService: NestjsUserLibService,
    private nestjsAuthService: NestjsAuthLibService
  ) {}

  async createUser(user: TUser) {
    return await this.nestjsUserService.createUser(user);
  }

  async login(
    userInput: LoginDto
  ): Promise<ApiResponse<{ user: User; accessToken: string }|null> | null> {
    const user = await this.nestjsAuthService.validateUser(userInput);
    if (user) {
      const jwt = await this.nestjsAuthService.generateJwt(user);
      return apiSuccess(
        {
          user,
          accessToken: jwt,
        },
        'Login successful',
        HttpStatus.OK
      );
    }
    return apiFailed(null, 'Invalid credentials', HttpStatus.UNAUTHORIZED);
  }
}
