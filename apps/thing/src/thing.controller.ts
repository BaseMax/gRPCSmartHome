import { Controller } from '@nestjs/common';
import { ThingService } from './thing.service';
import {
  CreateThingRequest,
  CreateThingResponse,
  DeleteThingRequest,
  DeleteThingResponse,
  DoActionRequest,
  DoActionResponse,
  FindThingByIdRequest,
  FindThingByIdResponse,
  ThingServiceController,
  ThingServiceControllerMethods,
  UpdateThingRequest,
  UpdateThingResponse,
} from '@app/common';

@Controller()
@ThingServiceControllerMethods()
export class ThingController implements ThingServiceController {
  constructor(private readonly thingService: ThingService) {}
  doAction(request: DoActionRequest): Promise<DoActionResponse> {
    return this.thingService.doAction(request);
  }
  createThing(request: CreateThingRequest): Promise<CreateThingResponse> {
    return this.thingService.createThing(request);
  }

  findThingById(request: FindThingByIdRequest): Promise<FindThingByIdResponse> {
    return this.thingService.findThingById(request);
  }

  updateThing(request: UpdateThingRequest): Promise<UpdateThingResponse> {
    return this.thingService.updateThing(request);
  }

  deleteThing(request: DeleteThingRequest): Promise<DeleteThingResponse> {
    return this.thingService.deleteThing(request);
  }
}
