import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
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
import { Observable } from 'rxjs';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}
  findUserByUsername(
    request: FindUserByUsernameRequest,
  ): Promise<UserResponse> {
    return this.userService.findUserByUsername(request);
  }
  findUserById(request: FindUserByIdRequest): Promise<UserResponse> {
    throw new Error('Method not implemented.');
  }
  createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    return this.userService.createUser(request);
  }
  updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    throw new Error('Method not implemented.');
  }
}
