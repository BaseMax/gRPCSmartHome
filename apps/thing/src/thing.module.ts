import { Module } from '@nestjs/common';
import { ThingController } from './thing.controller';
import { ThingService } from './thing.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Thing, ThingSchema } from './thing.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/thing-service'),
    MongooseModule.forFeature([{ name: Thing.name, schema: ThingSchema }]),
  ],
  controllers: [ThingController],
  providers: [ThingService],
})
export class ThingModule {}
