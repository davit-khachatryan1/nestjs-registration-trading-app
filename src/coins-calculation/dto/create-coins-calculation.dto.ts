import { IsNumber, IsObject, IsNotEmpty, IsString, IsOptional } from 'class-validator';


class DataDto {
  @IsNumber()
  @IsOptional()
  Y4: number;

  @IsNumber()
  @IsOptional()
  A242: number;

  @IsNumber()
  @IsOptional()
  D244: number;

  @IsNumber()
  @IsOptional()
  E242: number;

  @IsNumber()
  @IsOptional()
  B4: number;

  @IsNumber()
  @IsOptional()
  C4: number;

  @IsNumber()
  @IsOptional()
  D4: number;

  @IsNumber()
  @IsOptional()
  E4: number;

  @IsNumber()
  @IsOptional()
  G4: number;

  @IsNumber()
  @IsOptional()
  N4: number;

  @IsNumber()
  @IsOptional()
  O4: number;

  @IsNumber()
  @IsOptional()
  P4: number;

  @IsNumber()
  @IsOptional()
  P5: number;

  @IsNumber()
  @IsOptional()
  CG4: number;

  @IsNumber()
  @IsOptional()
  CH4: number;

  @IsNumber()
  @IsOptional()
  Z4: number;

  @IsNumber()
  @IsOptional()
  AI4: number;

  @IsNumber()
  @IsOptional()
  BO4: number;

  @IsNumber()
  @IsOptional()
  AJ4: number;

  @IsNumber()
  @IsOptional()
  AC4: number;

  @IsNumber()
  @IsOptional()
  BF4: number;

  @IsNumber()
  @IsOptional()
  U4: number;

  @IsNumber()
  @IsOptional()
  V4: number;

  @IsNumber()
  @IsOptional()
  W4: number;

  @IsNumber()
  @IsOptional()
  X4: number;

  @IsNumber()
  @IsOptional()
  BE4: number;

  @IsNumber()
  @IsOptional()
  BE242: number;

  @IsNumber()
  @IsOptional()
  B242: number;

  @IsNumber()
  @IsOptional()
  C244: number;

  @IsNumber()
  @IsOptional()
  L6: number;

  @IsNumber()
  @IsOptional()
  AF4: number;

  @IsNumber()
  @IsOptional()
  AG4: number;

  @IsNumber()
  @IsOptional()
  AH4: number;

  @IsNumber()
  @IsOptional()
  AD4: number;

  @IsNumber()
  @IsOptional()
  BG4: number;

  @IsNumber()
  @IsOptional()
  AA4: number;

  @IsNumber()
  @IsOptional()
  BP4: number;

  @IsNumber()
  @IsOptional()
  K8: number;

  @IsNumber()
  @IsOptional()
  K6: number;

  @IsNumber()
  @IsOptional()
  K9: number;

  @IsNumber()
  @IsOptional()
  G6: number;

  @IsNumber()
  @IsOptional()
  F6: number;

  @IsNumber()
  @IsOptional()
  G9: number;

  @IsNumber()
  @IsOptional()
  AE4: number;

  @IsNumber()
  @IsOptional()
  BI4: number;

  @IsNumber()
  @IsOptional()
  AB4: number;

  @IsNumber()
  @IsOptional()
  BR4: number;

  @IsNumber()
  @IsOptional()
  L8: number;

  @IsNumber()
  @IsOptional()
  L9: number;

  @IsNumber()
  @IsOptional()
  I6: number;

  @IsNumber()
  @IsOptional()
  E8: number;

  @IsNumber()
  @IsOptional()
  E9: number;

  @IsNumber()
  @IsOptional()
  BH4: number;

  @IsNumber()
  @IsOptional()
  BQ4: number;

  @IsNumber()
  @IsOptional()
  I8: number;

  @IsNumber()
  @IsOptional()
  I9: number;

  @IsNumber()
  @IsOptional()
  J6: number;

  @IsNumber()
  @IsOptional()
  F8: number;

  @IsNumber()
  @IsOptional()
  F9: number;

  @IsNumber()
  @IsOptional()
  BJ4: number;

  @IsNumber()
  @IsOptional()
  BS4: number;
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
  @IsString()
  id: string;  // Change to string to match UUID

  @IsObject()
  @IsNotEmpty()
  data: DataDto;

  @IsObject()
  @IsNotEmpty()
  results: ResultsDto;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
