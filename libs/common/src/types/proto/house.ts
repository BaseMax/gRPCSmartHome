/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

/** Requests */
export interface CreateHouseRequest {
  name: string;
  desc: string;
  userId: string;
}

export interface FindHouseByIdRequest {
  id: string;
  userId: string;
}

export interface FindHouseByOwnerRequest {
  id: string;
  userId: string;
}

export interface UpdateHouseRequest {
  id: string;
  name?: string | undefined;
  desc?: string | undefined;
  userId: string;
}

export interface DeleteHouseRequest {
  id: string;
  userId: string;
}

/** Responses */
export interface CreateHouseResponse {
  code: number;
  message?: string | undefined;
  house: House | undefined;
}

export interface FindHouseByIdResponse {
  code: number;
  message?: string | undefined;
  house?: House | undefined;
}

export interface FindHousesByOwnerResponse {
  code: number;
  message?: string | undefined;
  house: House[];
}

export interface UpdateHouseResponse {
  code: number;
  message?: string | undefined;
  house?: House | undefined;
}

export interface DeleteHouseResponse {
  code: number;
  message?: string | undefined;
  deletedCount?: number | undefined;
}

/** Types */
export interface House {
  id: string;
  name: string;
  desc: string;
  userId: string;
  subOwner: string[];
}

export const HOUSE_PACKAGE_NAME = 'house';

export interface HouseServiceClient {
  createHouse(request: CreateHouseRequest): Observable<CreateHouseResponse>;

  findHouseById(
    request: FindHouseByIdRequest,
  ): Observable<FindHouseByIdResponse>;

  findHousesByOwner(
    request: FindHouseByOwnerRequest,
  ): Observable<FindHousesByOwnerResponse>;

  updateHouse(request: UpdateHouseRequest): Observable<UpdateHouseResponse>;

  deleteHouse(request: DeleteHouseRequest): Observable<DeleteHouseResponse>;
}

export interface HouseServiceController {
  createHouse(
    request: CreateHouseRequest,
  ):
    | Promise<CreateHouseResponse>
    | Observable<CreateHouseResponse>
    | CreateHouseResponse;

  findHouseById(
    request: FindHouseByIdRequest,
  ):
    | Promise<FindHouseByIdResponse>
    | Observable<FindHouseByIdResponse>
    | FindHouseByIdResponse;

  findHousesByOwner(
    request: FindHouseByOwnerRequest,
  ):
    | Promise<FindHousesByOwnerResponse>
    | Observable<FindHousesByOwnerResponse>
    | FindHousesByOwnerResponse;

  updateHouse(
    request: UpdateHouseRequest,
  ):
    | Promise<UpdateHouseResponse>
    | Observable<UpdateHouseResponse>
    | UpdateHouseResponse;

  deleteHouse(
    request: DeleteHouseRequest,
  ):
    | Promise<DeleteHouseResponse>
    | Observable<DeleteHouseResponse>
    | DeleteHouseResponse;
}

export function HouseServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createHouse',
      'findHouseById',
      'findHousesByOwner',
      'updateHouse',
      'deleteHouse',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('HouseService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('HouseService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const HOUSE_SERVICE_NAME = 'HouseService';
