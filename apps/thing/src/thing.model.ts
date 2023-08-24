import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Thing as IThing } from '@app/common';

export type ThingDocument = HydratedDocument<Thing>;

@Schema({
  toJSON: {
    getters: true,
  },
})
export class Thing implements Omit<IThing, 'id'> {
  @Prop({ required: true })
  name: string;

  @Prop()
  desc: string;

  @Prop()
  status: string;

  @Prop()
  value: string;
}

export const ThingSchema = SchemaFactory.createForClass(Thing);
