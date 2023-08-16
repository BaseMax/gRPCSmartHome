import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';

@Module({
  controllers: [HouseController],
  providers: [HouseService]
})
export class HouseModule {}
