import { Injectable } from '@nestjs/common';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class NestjsUserLibService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  getUserById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  getUserByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({
      username,
    });
  }

  async createUser(user: {
    _id: import('mongoose').Schema.Types.ObjectId;
    status: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    avatar?: string | undefined;
  }): Promise<User> {
    user.password = await bcrypt.hash(user.password, 10);

    return this.userModel.create(user);
  }
}
