import { THING_SERVICE_NAME, ThingServiceClient } from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateThingDto, UpdateThingDto } from './dto';
import { ActionDto } from './dto/action.dto';

@Injectable()
export class ThingService implements OnModuleInit {
  private thingService: ThingServiceClient;

  constructor(@Inject('THING_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.thingService =
      this.client.getService<ThingServiceClient>(THING_SERVICE_NAME);
  }

  createThing(dto: CreateThingDto) {
    return this.thingService.createThing(dto);
  }

  findThingById(id: string) {
    return this.thingService.findThingById({ id });
  }

  updateThing(id: string, dto: UpdateThingDto) {
    console.log({ id, dto });

    return this.thingService.updateThing({ id, ...dto });
  }

  deleteThing(id: string) {
    return this.thingService.deleteThing({ id });
  }

  doAction(id: string, action: ActionDto) {
    return this.thingService.doAction({ id, ...action });
  }
}
