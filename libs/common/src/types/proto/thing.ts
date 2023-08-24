/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "thing";

/** Requests */
export interface CreateThingRequest {
  name: string;
  desc: string;
}

export interface FindThingByIdRequest {
  id: string;
}

export interface UpdateThingRequest {
  id: string;
  name: string;
  desc: string;
}

export interface DeleteThingRequest {
  id: string;
}

export interface DoActionRequest {
  id: string;
  value: string;
  status: string;
  action: string;
}

/** Responses */
export interface CreateThingResponse {
  code: number;
  thing: Thing | undefined;
}

export interface FindThingByIdResponse {
  code: number;
  thing?: Thing | undefined;
}

export interface UpdateThingResponse {
  code: number;
  thing?: Thing | undefined;
}

export interface DeleteThingResponse {
  code: number;
  deletedCount: number;
}

export interface DoActionResponse {
  code: number;
  thing?: Thing | undefined;
  message?: string | undefined;
}

/** Types */
export interface Thing {
  id: string;
  name: string;
  desc: string;
  status: string;
  value: string;
}

export const THING_PACKAGE_NAME = "thing";

export interface ThingServiceClient {
  createThing(request: CreateThingRequest): Observable<CreateThingResponse>;

  findThingById(request: FindThingByIdRequest): Observable<FindThingByIdResponse>;

  updateThing(request: UpdateThingRequest): Observable<UpdateThingResponse>;

  deleteThing(request: DeleteThingRequest): Observable<DeleteThingResponse>;

  doAction(request: DoActionRequest): Observable<DoActionResponse>;
}

export interface ThingServiceController {
  createThing(
    request: CreateThingRequest,
  ): Promise<CreateThingResponse> | Observable<CreateThingResponse> | CreateThingResponse;

  findThingById(
    request: FindThingByIdRequest,
  ): Promise<FindThingByIdResponse> | Observable<FindThingByIdResponse> | FindThingByIdResponse;

  updateThing(
    request: UpdateThingRequest,
  ): Promise<UpdateThingResponse> | Observable<UpdateThingResponse> | UpdateThingResponse;

  deleteThing(
    request: DeleteThingRequest,
  ): Promise<DeleteThingResponse> | Observable<DeleteThingResponse> | DeleteThingResponse;

  doAction(request: DoActionRequest): Promise<DoActionResponse> | Observable<DoActionResponse> | DoActionResponse;
}

export function ThingServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createThing", "findThingById", "updateThing", "deleteThing", "doAction"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ThingService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ThingService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const THING_SERVICE_NAME = "ThingService";
