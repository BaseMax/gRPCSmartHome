import { RegisterRequest } from '@app/common';
import { IsString, IsNotEmpty } from 'class-validator';

export class RegisterDto implements RegisterRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
