import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { House as IHouse } from '@app/common';

export type HouseDocument = HydratedDocument<House>;

@Schema({
  toJSON: {
    getters: true,
  },
})
export class House implements Omit<IHouse, 'id'> {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  desc: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  subOwner: string[];
}

export const HouseSchema = SchemaFactory.createForClass(House);
