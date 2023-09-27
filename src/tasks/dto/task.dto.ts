import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { TaksStatusEnum } from '../task.entity';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsIn([TaksStatusEnum.IN_PROGRESS, TaksStatusEnum.DONE, TaksStatusEnum.OPEN])
  status?: TaksStatusEnum;
}
