import { Module } from '@nestjs/common';
import { ThingService } from './thing.service';
import { ThingController } from './thing.controller';

@Module({
  controllers: [ThingController],
  providers: [ThingService]
})
export class ThingModule {}
