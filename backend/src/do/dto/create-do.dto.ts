import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDoDto {
  @IsString()
  @IsNotEmpty()
  code!: string;

  @IsString()
  @IsNotEmpty()
  branch!: string;

  @IsNumber()
  @IsNotEmpty()
  date!: number;
}
