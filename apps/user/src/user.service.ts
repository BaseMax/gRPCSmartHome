import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';
import {
  CreateUserRequest,
  CreateUserResponse,
  FindUserByUsernameRequest,
  GrpcStatusCode,
  UserResponse,
} from '@app/common';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findUserByUsername(
    dto: FindUserByUsernameRequest,
  ): Promise<UserResponse> {
    const user = await this.userModel.findOne({ username: dto.username });
    if (!user)
      return {
        code: GrpcStatusCode.NOT_FOUND,
        message: 'user not found',
        user: null,
      };

    console.log({ userInFindUsername: user });

    return {
      code: GrpcStatusCode.OK,
      user: user.toJSON(),
    };
  }

  async createUser(dto: CreateUserRequest): Promise<CreateUserResponse> {
    const isUserExist = await this.findUserByUsername(dto);

    if (isUserExist.code === GrpcStatusCode.OK)
      return {
        code: GrpcStatusCode.ALREADY_EXISTS,
        message: 'username already taken',
        user: null,
      };

    const newUser = await this.userModel.create(dto);

    return {
      code: 0,
      user: newUser.toJSON(),
      message: 'user created successfully',
    };
  }
}
