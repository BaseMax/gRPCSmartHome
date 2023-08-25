import {
  GrpcStatusCode,
  LoginRequest,
  RegisterRequest,
  USER_SERVICE_NAME,
  UserServiceClient,
  VerifyTokenRequest,
  VerifyTokenResponse,
} from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import * as bcrypt from 'bcrypt';
import { signToken, verifyToken } from './jwt';
import {
  GrpcAlreadyExistsException,
  GrpcUnauthenticatedException,
} from 'nestjs-grpc-exceptions';
import { IJwtPayload } from './jwt';

@Injectable()
export class AuthService implements OnModuleInit {
  private userService: UserServiceClient;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService =
      this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  async login(loginDto: LoginRequest) {
    const { username, password } = loginDto;

    const result = await lastValueFrom(
      this.userService.findUserByUsername({ username }),
    );

    if (result.code === GrpcStatusCode.NOT_FOUND)
      throw new GrpcUnauthenticatedException('wrong credentials');

    const user = result.user;

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      throw new GrpcUnauthenticatedException('wrong credentials');

    const payload = { id: user.id, username };
    const token = await signToken(payload);

    return { token };
  }

  async register(registerDto: RegisterRequest) {
    const resultFindUser = await lastValueFrom(
      this.userService.findUserByUsername({
        username: registerDto.username,
      }),
    );

    if (resultFindUser.code !== GrpcStatusCode.NOT_FOUND)
      throw new GrpcAlreadyExistsException(
        'user with this username already exists',
      );

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    registerDto.password = hashedPassword;

    const resultCreateUser = await lastValueFrom(
      this.userService.createUser(registerDto),
    );
    if (resultCreateUser.code !== GrpcStatusCode.OK)
      throw new GrpcAlreadyExistsException('username already taken');

    const newUser = resultCreateUser.user;

    const payload: IJwtPayload = {
      id: newUser.id,
      username: newUser.username,
    };
    const token = await signToken(payload);

    return { token };
  }

  async verifyAccessToken(
    request: VerifyTokenRequest,
  ): Promise<VerifyTokenResponse> {
    try {
      const result = (await verifyToken(request.token)) as IJwtPayload;

      const { user } = await lastValueFrom(
        this.userService.findUserByUsername({
          username: result.username,
        }),
      );

      return user;
    } catch (error) {
      throw new GrpcUnauthenticatedException('invalid token');
    }
  }
}
