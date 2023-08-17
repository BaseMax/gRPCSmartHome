import {
  CreateUserRequest,
  CreateUserResponse,
  FindUserByIdRequest,
  FindUserByUsernameRequest,
  UpdateUserRequest,
  UpdateUserResponse,
  UserResponse,
  UserServiceController,
  UserServiceControllerMethods,
} from '@app/common';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}
  findUserByUsername(
    request: FindUserByUsernameRequest,
  ): UserResponse | Observable<UserResponse> | Promise<UserResponse> {
    return this.userService.findUserByUsername(request);
  }
  findUserById(
    request: FindUserByIdRequest,
  ): UserResponse | Observable<UserResponse> | Promise<UserResponse> {
    throw new Error('Method not implemented.');
  }
  createUser(
    request: CreateUserRequest,
  ):
    | CreateUserResponse
    | Observable<CreateUserResponse>
    | Promise<CreateUserResponse> {
    return this.userService.createUser(request);
  }
  updateUser(
    request: UpdateUserRequest,
  ):
    | UpdateUserResponse
    | Observable<UpdateUserResponse>
    | Promise<UpdateUserResponse> {
    throw new Error('Method not implemented.');
  }
}
