import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User as IUser } from '@app/common';

export type UserDocument = HydratedDocument<User>;

@Schema({
  toJSON: {
    getters: true,
  },
})
export class User implements Omit<IUser, 'id'> {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
