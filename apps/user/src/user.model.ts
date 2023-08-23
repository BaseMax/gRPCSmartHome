import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User as IUser, Permissions } from '@app/common';

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

  @Prop({ required: true, default: [] })
  permissions: Permissions[];
}

export const UserSchema = SchemaFactory.createForClass(User);
