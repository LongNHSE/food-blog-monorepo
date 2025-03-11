import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { TUser } from '@food-blog/interfaces';

@Schema({
  timestamps: true,
})
export class User extends Document<ObjectId, any, TUser> implements TUser {
  @Prop({ type: Number })
  __v!: number;

  @Prop({ type: String, required: true })
  firstName!: string;

  @Prop({ type: Date })
  createdAt!: Date;

  @Prop({ type: Date })
  updatedAt!: Date;

  @Prop({ type: String })
  avatar?: string;

  @Prop({ type: String, required: true })
  lastName!: string;

  @Prop({ type: String, required: true, unique: true })
  username!: string;

  @Prop({ type: String, required: true, unique: true })
  email!: string;

  @Prop({ type: String, required: true })
  password!: string;

  @Prop({ type: String, enum: ['user', 'admin'], default: 'user' })
  role!: string;

  @Prop({ type: String, enum: ['active', 'inactive'], default: 'active' })
  status!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
