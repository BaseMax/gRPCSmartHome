import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ThingService } from './thing.service';
import { JwtGuard } from '../auth/guard';
import { CreateThingDto, UpdateThingDto } from './dto';
import { ActionDto } from './dto/action.dto';

@Controller('thing')
@UseGuards(JwtGuard)
export class ThingController {
  constructor(private readonly thingService: ThingService) {}

  @Post()
  addThing(@Body() dto: CreateThingDto) {
    return this.thingService.createThing(dto);
  }

  @Get(':id')
  getThing(@Param('id') id: string) {
    return this.thingService.findThingById(id);
  }

  @Put(':id')
  updateThing(@Param('id') id: string, @Body() dto: UpdateThingDto) {
    return this.thingService.updateThing(id, dto);
  }

  @Delete(':id')
  deleteThing(@Param('id') id: string) {
    return this.thingService.deleteThing(id);
  }

  @Patch(':id')
  doAction(@Param('id') id: string, @Body() action: ActionDto) {
    return this.thingService.doAction(id, action);
  }
}
