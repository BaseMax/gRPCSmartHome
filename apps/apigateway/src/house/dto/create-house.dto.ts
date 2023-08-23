import { CreateHouseRequest } from '@app/common';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHouseDto implements Omit<CreateHouseRequest, 'userId'> {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  desc: string;
}
