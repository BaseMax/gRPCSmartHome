import { FindUserByIdRequest, GrpcStatusCode } from '@app/common';
import {
  CreateHouseRequest,
  CreateHouseResponse,
  DeleteHouseRequest,
  DeleteHouseResponse,
  FindHouseByIdResponse,
  FindHouseByOwnerRequest,
  FindHousesByOwnerResponse,
  UpdateHouseRequest,
  UpdateHouseResponse,
} from '@app/common/types/proto/house';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { House } from './house.model';
import { Model } from 'mongoose';

@Injectable()
export class HouseService {
  constructor(@InjectModel(House.name) private houseModel: Model<House>) {}
  async createHouse(request: CreateHouseRequest): Promise<CreateHouseResponse> {
    const house = await this.houseModel.create(request);
    return {
      code: GrpcStatusCode.OK,
      house: house.toJSON(),
    };
  }

  async findHouseById(
    request: FindUserByIdRequest,
  ): Promise<FindHouseByIdResponse> {
    const house = await this.houseModel.findById(request.id);
    if (!house) {
      return {
        code: GrpcStatusCode.NOT_FOUND,
        house: null,
      };
    }
    return {
      code: GrpcStatusCode.OK,
      house: house.toJSON(),
    };
  }

  async findHousesByOwner(
    request: FindHouseByOwnerRequest,
  ): Promise<FindHousesByOwnerResponse> {
    const house = await this.houseModel.findOne({ owner: request.userId });
    if (!house) {
      return {
        code: GrpcStatusCode.NOT_FOUND,
        house: null,
      };
    }
    return {
      code: GrpcStatusCode.OK,
      house: house.toJSON(),
    };
  }

  async updateHouse(request: UpdateHouseRequest): Promise<UpdateHouseResponse> {
    const house = await this.houseModel.findOneAndUpdate(
      { _id: request.id },
      {
        name: request.name,
        desc: request.desc,
      },
    );

    return {
      code: GrpcStatusCode.OK,
      house: house.toJSON(),
    };
  }

  async deleteHouse(request: DeleteHouseRequest): Promise<DeleteHouseResponse> {
    const house = await this.houseModel.deleteOne({ _id: request.id });
    return {
      code: GrpcStatusCode.OK,
      deletedCount: house.deletedCount,
    };
  }

  async isOwner(userId: string, houseId: string): Promise<boolean> {
    const house = await this.houseModel.findOne({ id: houseId });
    if (!house) return null;
    return house.userId.toString() === userId.toString();
  }
}
