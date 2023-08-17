import {
  AuthServiceController,
  AuthServiceControllerMethods,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  VerifyTokenRequest,
  VerifyTokenResponse,
} from '@app/common';
import { Controller, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {
  GrpcNotFoundException,
  GrpcToHttpInterceptor,
  HttpToGrpcInterceptor,
} from 'nestjs-grpc-exceptions';

@Controller()
@UseInterceptors()
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly authService: AuthService) {}
  verifyToken(
    request: VerifyTokenRequest,
  ):
    | VerifyTokenResponse
    | Observable<VerifyTokenResponse>
    | Promise<VerifyTokenResponse> {
    return this.authService.verifyAccessToken(request);
  }
  loginUser(
    request: LoginRequest,
  ): LoginResponse | Promise<LoginResponse> | Observable<LoginResponse> {
    return this.authService.login(request);
  }
  registerUser(
    request: RegisterRequest,
  ):
    | RegisterResponse
    | Promise<RegisterResponse>
    | Observable<RegisterResponse> {
    return this.authService.register(request);
  }
}
