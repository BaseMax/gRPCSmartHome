import { Controller, Get } from '@nestjs/common';
import { ThingService } from './thing.service';

@Controller()
export class ThingController {
  constructor(private readonly thingService: ThingService) {}

  @Get()
  getHello(): string {
    return this.thingService.getHello();
  }
}
