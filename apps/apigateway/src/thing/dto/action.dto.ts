import { ACTIONS, DoActionRequest } from '@app/common';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ActionDto implements Omit<DoActionRequest, 'id'> {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  value: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  status: string;

  @IsEnum(ACTIONS)
  action: ACTIONS;
}
