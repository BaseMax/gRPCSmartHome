import { UpdateThingRequest } from '@app/common';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateThingDto implements Omit<UpdateThingRequest, 'id'> {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  desc: string;
}
