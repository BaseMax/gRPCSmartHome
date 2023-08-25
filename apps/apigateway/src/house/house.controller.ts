import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { HouseService } from './house.service';
import { CreateHouseDto, UpdateHouseDto } from './dto';
import { CurrentUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @UseGuards(JwtGuard)
  @Post()
  createHouse(@Body() createHouseDto: CreateHouseDto, @CurrentUser() user) {
    return this.houseService.createHouse(createHouseDto, user);
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findHouseById(@Param('id') id: string, @CurrentUser() user) {
    return this.houseService.findHouseById(id, user);
  }

  @UseGuards(JwtGuard)
  @Put(':id')
  updateHouse(
    @Param('id') id: string,
    @CurrentUser() user,
    @Body() dto: UpdateHouseDto,
  ) {
    return this.houseService.updateHouse(id, user, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteHouse(@Param('id') id: string, @CurrentUser() user) {
    return this.houseService.deleteHouse(id, user);
  }
}
