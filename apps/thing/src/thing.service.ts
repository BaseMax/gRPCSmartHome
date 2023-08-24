import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Thing } from './thing.model';
import { Model } from 'mongoose';
import { CreateThingDto } from 'apps/apigateway/src/thing/dto/create-thing.dto';
import {
  ACTIONS,
  CreateThingResponse,
  DeleteThingRequest,
  DeleteThingResponse,
  DoActionRequest,
  DoActionResponse,
  FindThingByIdRequest,
  FindThingByIdResponse,
  GrpcStatusCode,
  UpdateThingRequest,
  UpdateThingResponse,
} from '@app/common';

@Injectable()
export class ThingService {
  constructor(@InjectModel(Thing.name) private thingModel: Model<Thing>) {}

  async createThing(dto: CreateThingDto): Promise<CreateThingResponse> {
    const thing = await this.thingModel.create(dto);
    return {
      code: 0,
      thing: thing.toJSON(),
    };
  }
  async findThingById(
    request: FindThingByIdRequest,
  ): Promise<FindThingByIdResponse> {
    const thing = await this.thingModel.findById(request.id);
    if (!thing) {
      return {
        code: 0,
        thing: null,
      };
    }

    return {
      code: 0,
      thing: thing.toJSON(),
    };
  }

  async updateThing(request: UpdateThingRequest): Promise<UpdateThingResponse> {
    const thing = await this.thingModel.findOneAndUpdate(
      { _id: request.id },
      {
        ...request,
      },
    );

    if (!thing) {
      return {
        code: GrpcStatusCode.NOT_FOUND,
        thing: null,
      };
    }

    return {
      code: GrpcStatusCode.OK,
      thing: thing.toJSON(),
    };
  }

  async deleteThing(request: DeleteThingRequest): Promise<DeleteThingResponse> {
    const thing = await this.thingModel.deleteOne({ _id: request.id });

    if (!thing) {
      return {
        code: GrpcStatusCode.NOT_FOUND,
        deletedCount: thing.deletedCount,
      };
    }

    return {
      code: GrpcStatusCode.OK,
      deletedCount: thing.deletedCount,
    };
  }
  async doAction(request: DoActionRequest): Promise<DoActionResponse> {
    let thing = await this.thingModel.findById(request.id.toString());
    if (!thing) {
      return {
        code: GrpcStatusCode.NOT_FOUND,
        thing: null,
      };
    }

    switch (request.action) {
      case ACTIONS.SNAPSHOT:
        return {
          code: GrpcStatusCode.OK,
          message: 'sending a snapshot of the camera',
        };
      case ACTIONS.STREAM:
        return {
          code: GrpcStatusCode.OK,
          message: 'sending stream of the camera',
        };
      case ACTIONS.TURNOFF:
        thing = await this.thingModel.findOneAndUpdate(
          { _id: request.id },
          {
            status: ACTIONS.TURNOFF,
            value: 'Off',
          },
        );
        return {
          code: GrpcStatusCode.OK,
          message: 'thing turn off successfully',
        };
      case ACTIONS.TURNON:
        thing = await this.thingModel.findOneAndUpdate(
          { _id: request.id },
          {
            status: ACTIONS.TURNON,
            value: 'On',
          },
        );

        return {
          code: GrpcStatusCode.OK,
          message: 'thing turn on successfully',
          thing: thing.toJSON(),
        };
      case ACTIONS.GETTEMP:
        return {
          code: GrpcStatusCode.OK,
          thing: thing.toJSON(),
        };
      case ACTIONS.SETTEMP:
        thing = await this.thingModel.findOneAndUpdate(
          { _id: request.id },
          { value: request.value },
        );
        return {
          code: GrpcStatusCode.OK,
          thing: thing.toJSON(),
        };
      case ACTIONS.SETMODE:
        thing = await this.thingModel.findOneAndUpdate(
          { _id: request.id },
          {
            status: request.status,
          },
        );
        return {
          code: GrpcStatusCode.OK,
          thing: thing.toJSON(),
        };
      default:
        return {
          code: GrpcStatusCode.ABORTED,
          message: 'invalid action',
        };
    }
  }
}
