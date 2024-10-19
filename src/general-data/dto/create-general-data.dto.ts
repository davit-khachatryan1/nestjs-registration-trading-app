// create-general-data.dto.ts
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateGeneralDataDto {
  @IsNotEmpty()
  @IsNumber()
  A242: number;

  @IsNotEmpty()
  @IsNumber()
  D244: number;

  @IsNotEmpty()
  @IsNumber()
  accumulatedBalance: number;

  @IsNotEmpty()
  @IsNumber()
  CG4: number;

  @IsNotEmpty()
  @IsNumber()
  CH4: number;

  @IsNotEmpty()
  @IsNumber()
  E242: number;
}
