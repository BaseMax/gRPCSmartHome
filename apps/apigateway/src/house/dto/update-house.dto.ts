import { UpdateHouseRequest } from '@app/common';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateHouseDto
  implements Omit<UpdateHouseRequest, 'userId' | 'id'>
{
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  desc?: string;
}
