import { CreateThingRequest } from '@app/common';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateThingDto implements CreateThingRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  desc: string;
}
