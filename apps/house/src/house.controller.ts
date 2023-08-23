import { Controller } from '@nestjs/common';
import { HouseService } from './house.service';
import {
  CreateHouseRequest,
  CreateHouseResponse,
  DeleteHouseRequest,
  DeleteHouseResponse,
  FindHouseByIdRequest,
  FindHouseByIdResponse,
  FindHouseByOwnerRequest,
  FindHousesByOwnerResponse,
  HouseServiceController,
  HouseServiceControllerMethods,
  UpdateHouseRequest,
  UpdateHouseResponse,
} from '@app/common/types/proto/house';

@Controller()
@HouseServiceControllerMethods()
export class HouseController implements HouseServiceController {
  constructor(private readonly houseService: HouseService) {}

  findHouseById(request: FindHouseByIdRequest): Promise<FindHouseByIdResponse> {
    return this.houseService.findHouseById(request);
  }

  findHousesByOwner(
    request: FindHouseByOwnerRequest,
  ): Promise<FindHousesByOwnerResponse> {
    return this.houseService.findHousesByOwner(request);
  }

  updateHouse(request: UpdateHouseRequest): Promise<UpdateHouseResponse> {
    return this.houseService.updateHouse(request);
  }

  deleteHouse(request: DeleteHouseRequest): Promise<DeleteHouseResponse> {
    return this.houseService.deleteHouse(request);
  }
  createHouse(request: CreateHouseRequest): Promise<CreateHouseResponse> {
    return this.houseService.createHouse(request);
  }
}
