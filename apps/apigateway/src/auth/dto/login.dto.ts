import { LoginRequest } from '@app/common';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto implements LoginRequest {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
