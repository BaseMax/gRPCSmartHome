import { Controller } from '@nestjs/common';
import { HouseService } from './house.service';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}
}
