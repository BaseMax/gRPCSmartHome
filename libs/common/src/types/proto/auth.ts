/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

/** Requests body */
export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  name: string;
  password: string;
}

export interface VerifyTokenRequest {
  token: string;
}

/** Responses body */
export interface LoginResponse {
  token: string;
}

export interface RegisterResponse {
  token: string;
}

export interface VerifyTokenResponse {
  id: string;
  name: string;
  username: string;
  permissions: UserPermissions[];
}

export interface UserPermissions {
  id: string;
  type: string;
  perms: UserPermission | undefined;
}

export interface UserPermission {
  light: boolean;
  thermostat: boolean;
  camera: boolean;
}

export const AUTH_PACKAGE_NAME = 'auth';

/** Services */

export interface AuthServiceClient {
  loginUser(request: LoginRequest): Observable<LoginResponse>;

  registerUser(request: RegisterRequest): Observable<RegisterResponse>;

  verifyToken(request: VerifyTokenRequest): Observable<VerifyTokenResponse>;
}

/** Services */

export interface AuthServiceController {
  loginUser(
    request: LoginRequest,
  ): Promise<LoginResponse> | Observable<LoginResponse> | LoginResponse;

  registerUser(
    request: RegisterRequest,
  ):
    | Promise<RegisterResponse>
    | Observable<RegisterResponse>
    | RegisterResponse;

  verifyToken(
    request: VerifyTokenRequest,
  ):
    | Promise<VerifyTokenResponse>
    | Observable<VerifyTokenResponse>
    | VerifyTokenResponse;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['loginUser', 'registerUser', 'verifyToken'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('AuthService', method)(
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
      GrpcStreamMethod('AuthService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const AUTH_SERVICE_NAME = 'AuthService';
