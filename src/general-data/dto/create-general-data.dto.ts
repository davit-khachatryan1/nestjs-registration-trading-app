// create-general-data.dto.ts
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateGeneralDataDto {
  @IsNotEmpty()
  @IsNumber()
  balance: number;

  @IsNotEmpty()
  @IsNumber()
  initialBalance: number;

  @IsNotEmpty()
  @IsNumber()
  accumulatedBalance: number;

  @IsNotEmpty()
  @IsNumber()
  numberOfLongs: number;

  @IsNotEmpty()
  @IsNumber()
  numberOfShorts: number;

  @IsNotEmpty()
  @IsNumber()
  coinQuantity: number;
}
