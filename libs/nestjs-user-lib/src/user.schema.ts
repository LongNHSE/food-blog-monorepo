import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { UserType } from '@food-blog/interfaces';

@Schema({
  timestamps: true,
})
// implements UserType
export class User
  extends Document<ObjectId, any, UserType>
  implements UserType
{
  @Prop({ type: String, required: true })
  firstName!: string;

  @Prop({ type: String, required: true })
  lastName!: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
