import { IsNumber, IsObject, IsNotEmpty, IsString } from 'class-validator';

class DataDto {
  @IsNumber()
  Y4: number;

  @IsNumber()
  A242: number;

  @IsNumber()
  D244: number;

  @IsNumber()
  E242: number;

  @IsNumber()
  B4: number;

  @IsNumber()
  C4: number;

  @IsNumber()
  D4: number;

  @IsNumber()
  E4: number;

  @IsNumber()
  G4: number;

  @IsNumber()
  N4: number;

  @IsNumber()
  O4: number;

  @IsNumber()
  P4: number;

  @IsNumber()
  P5: number;

  @IsNumber()
  CG4: number;

  @IsNumber()
  CH4: number;
}

class ResultsDto {
  @IsNumber()
  result_BE4: number;

  @IsNumber()
  result_B5: number;

  @IsNumber()
  result_C5: number;

  @IsNumber()
  result_D5: number;

  @IsNumber()
  result_E5: number;

  @IsNumber()
  result_B6: number;

  @IsNumber()
  result_C6: number;

  @IsNumber()
  result_D6: number;

  @IsNumber()
  result_E6: number;

  @IsNumber()
  result_F4: number;

  @IsNumber()
  result_C244: number;

  @IsNumber()
  result_L6: number;

  @IsNumber()
  result_G6: number;

  @IsNumber()
  result_T4: number;

  @IsNumber()
  result_L2: number;

  @IsNumber()
  result_L4: number;

  @IsNumber()
  result_H3: number;

  @IsNumber()
  result_I3: number;

  @IsNumber()
  result_J3: number;

  @IsNumber()
  result_K3: number;

  @IsNumber()
  result_M4: number;

  @IsNumber()
  result_Q4: number;

  @IsNumber()
  priceAccordingAccumulatedBalance: number;

  @IsNumber()
  accumulatedBalance: number;

  @IsNumber()
  accumulatedBalanceForPosition: number;

  @IsNumber()
  averagedRationalTradingMargin: number;
}

export class CreateCoinsCalculationDto {
  @IsNumber()
  id: number;

  @IsObject()
  @IsNotEmpty()
  data: DataDto;

  @IsObject()
  @IsNotEmpty()
  results: ResultsDto;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
