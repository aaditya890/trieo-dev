import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDoDto {
  @IsString()
  @IsNotEmpty()
  doNumber!: string;

  @IsString()
  @IsNotEmpty()
  customerName!: string;

  @IsNumber()
  @IsNotEmpty()
  quantity!: number;
}
