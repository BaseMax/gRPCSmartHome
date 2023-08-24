/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

/** Requests */
export interface FindUserByUsernameRequest {
  username: string;
}

export interface FindUserByIdRequest {
  id: string;
}

export interface CreateUserRequest {
  username: string;
  name: string;
  password: string;
}

export interface UpdateUserRequest {
  id: string;
  name?: string | undefined;
  username?: string | undefined;
  password?: string | undefined;
}

/** Responses */
export interface UserResponse {
  code: number;
  message?: string | undefined;
  user?: User | undefined;
}

export interface CreateUserResponse {
  code: number;
  message?: string | undefined;
  user?: User | undefined;
}

export interface UpdateUserResponse {
  code: number;
  message?: string | undefined;
  user?: User | undefined;
}

/** Types */
export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
}

export const USER_PACKAGE_NAME = 'user';

/** Methods */

export interface UserServiceClient {
  findUserByUsername(
    request: FindUserByUsernameRequest,
  ): Observable<UserResponse>;

  findUserById(request: FindUserByIdRequest): Observable<UserResponse>;

  createUser(request: CreateUserRequest): Observable<CreateUserResponse>;

  updateUser(request: UpdateUserRequest): Observable<UpdateUserResponse>;
}

/** Methods */

export interface UserServiceController {
  findUserByUsername(
    request: FindUserByUsernameRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  findUserById(
    request: FindUserByIdRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  createUser(
    request: CreateUserRequest,
  ):
    | Promise<CreateUserResponse>
    | Observable<CreateUserResponse>
    | CreateUserResponse;

  updateUser(
    request: UpdateUserRequest,
  ):
    | Promise<UpdateUserResponse>
    | Observable<UpdateUserResponse>
    | UpdateUserResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'findUserByUsername',
      'findUserById',
      'createUser',
      'updateUser',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('UserService', method)(
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
      GrpcStreamMethod('UserService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const USER_SERVICE_NAME = 'UserService';
