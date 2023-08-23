import { HOUSE_SERVICE_NAME, HouseServiceClient, User } from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { UpdateHouseDto } from './dto';

@Injectable()
export class HouseService implements OnModuleInit {
  private houseService: HouseServiceClient;
  constructor(@Inject('HOUSE_PACKAGE') private client: ClientGrpc) {}
  onModuleInit() {
    this.houseService =
      this.client.getService<HouseServiceClient>(HOUSE_SERVICE_NAME);
  }

  createHouse(dto, user) {
    console.log({ user });
    return this.houseService.createHouse({ ...dto, userId: user.id });
  }

  findHouseById(id: string, user) {
    return this.houseService.findHouseById({ id, userId: user.id });
  }
  updateHouse(id: string, user: User, dto: UpdateHouseDto) {
    return this.houseService.updateHouse({ id, userId: user.id, ...dto });
  }

  deleteHouse(id, user) {
    return this.houseService.deleteHouse({ id, userId: user.id });
  }
}
