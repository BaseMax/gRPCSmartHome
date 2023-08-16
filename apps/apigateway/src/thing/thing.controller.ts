import { Controller } from '@nestjs/common';
import { ThingService } from './thing.service';

@Controller('thing')
export class ThingController {
  constructor(private readonly thingService: ThingService) {}
}
