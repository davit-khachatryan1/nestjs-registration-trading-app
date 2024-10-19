import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CoinsCalculationDocument = CoinsCalculation & Document;

@Schema({ _id: false })
export class Data {
  @Prop({ type: Number, required: false })
  Y4: number;

  @Prop({ type: Number, required: false })
  A242: number;

  @Prop({ type: Number, required: false })
  D244: number;

  @Prop({ type: Number, required: false })
  E242: number;

  @Prop({ type: Number, required: false })
  B4: number;

  @Prop({ type: Number, required: false })
  C4: number;

  @Prop({ type: Number, required: false })
  D4: number;

  @Prop({ type: Number, required: false })
  E4: number;

  @Prop({ type: Number, required: false })
  G4: number;

  @Prop({ type: Number, required: false })
  N4: number;

  @Prop({ type: Number, required: false })
  O4: number;

  @Prop({ type: Number, required: false })
  P4: number;

  @Prop({ type: Number, required: false })
  P5: number;

  @Prop({ type: Number, required: false })
  CG4: number;

  @Prop({ type: Number, required: false })
  CH4: number;

  @Prop({ type: Number, required: false })
  Z4: number;

  @Prop({ type: Number, required: false })
  AI4: number;

  @Prop({ type: Number, required: false })
  BO4: number;

  @Prop({ type: Number, required: false })
  AJ4: number;

  @Prop({ type: Number, required: false })
  AC4: number;

  @Prop({ type: Number, required: false })
  BF4: number;

  @Prop({ type: Number, required: false })
  U4: number;

  @Prop({ type: Number, required: false })
  V4: number;

  @Prop({ type: Number, required: false })
  W4: number;

  @Prop({ type: Number, required: false })
  X4: number;

  @Prop({ type: Number, required: false })
  BE4: number;

  @Prop({ type: Number, required: false })
  BE242: number;

  @Prop({ type: Number, required: false })
  B242: number;

  @Prop({ type: Number, required: false })
  C244: number;

  @Prop({ type: Number, required: false })
  L6: number;

  @Prop({ type: Number, required: false })
  AF4: number;

  @Prop({ type: Number, required: false })
  AG4: number;

  @Prop({ type: Number, required: false })
  AH4: number;

  @Prop({ type: Number, required: false })
  AD4: number;

  @Prop({ type: Number, required: false })
  BG4: number;

  @Prop({ type: Number, required: false })
  AA4: number;

  @Prop({ type: Number, required: false })
  BP4: number;

  @Prop({ type: Number, required: false })
  K8: number;

  @Prop({ type: Number, required: false })
  K6: number;

  @Prop({ type: Number, required: false })
  K9: number;

  @Prop({ type: Number, required: false })
  G6: number;

  @Prop({ type: Number, required: false })
  F6: number;

  @Prop({ type: Number, required: false })
  G9: number;

  @Prop({ type: Number, required: false })
  AE4: number;

  @Prop({ type: Number, required: false })
  BI4: number;

  @Prop({ type: Number, required: false })
  AB4: number;

  @Prop({ type: Number, required: false })
  BR4: number;

  @Prop({ type: Number, required: false })
  L8: number;

  @Prop({ type: Number, required: false })
  L9: number;

  @Prop({ type: Number, required: false })
  I6: number;

  @Prop({ type: Number, required: false })
  E8: number;

  @Prop({ type: Number, required: false })
  E9: number;

  @Prop({ type: Number, required: false })
  BH4: number;

  @Prop({ type: Number, required: false })
  BQ4: number;

  @Prop({ type: Number, required: false })
  I8: number;

  @Prop({ type: Number, required: false })
  I9: number;

  @Prop({ type: Number, required: false })
  J6: number;

  @Prop({ type: Number, required: false })
  F8: number;

  @Prop({ type: Number, required: false })
  F9: number;

  @Prop({ type: Number, required: false })
  BJ4: number;

  @Prop({ type: Number, required: false })
  BS4: number;
}

@Schema({ _id: false })
export class Results {
  @Prop({ type: Number, required: false })
  result_BE4: number;

  @Prop({ type: Number, required: false })
  result_B5: number;

  @Prop({ type: Number, required: false })
  result_C5: number;

  @Prop({ type: Number, required: false })
  result_D5: number;

  @Prop({ type: Number, required: false })
  result_E5: number;

  @Prop({ type: Number, required: false })
  result_B6: number;

  @Prop({ type: Number, required: false })
  result_C6: number;

  @Prop({ type: Number, required: false })
  result_D6: number;

  @Prop({ type: Number, required: false })
  result_E6: number;

  @Prop({ type: Number, required: false })
  result_F4: number;

  @Prop({ type: Number, required: false })
  result_C244: number;

  @Prop({ type: Number, required: false })
  result_L6: number;

  @Prop({ type: Number, required: false })
  result_G6: number;

  @Prop({ type: Number, required: false })
  result_T4: number;

  @Prop({ type: Number, required: false })
  result_L2: number;

  @Prop({ type: Number, required: false })
  result_L4: number;

  @Prop({ type: Number, required: false })
  result_H3: number;

  @Prop({ type: Number, required: false })
  result_I3: number;

  @Prop({ type: Number, required: false })
  result_J3: number;

  @Prop({ type: Number, required: false })
  result_K3: number;

  @Prop({ type: Number, required: false })
  result_M4: number;

  @Prop({ type: Number, required: false })
  result_Q4: number;

  @Prop({ type: Number, required: false })
  priceAccordingAccumulatedBalance: number;

  @Prop({ type: Number, required: false })
  accumulatedBalance: number;

  @Prop({ type: Number, required: false })
  accumulatedBalanceForPosition: number;

  @Prop({ type: Number, required: false })
  averagedRationalTradingMargin: number;
}

@Schema()
export class CoinsCalculation {
  @Prop({ type: String, required: true })
  id: number;

  @Prop({ type: Data, required: true })
  data: Data;

  @Prop({ type: Results, required: true })
  results: Results;

  @Prop({ required: false })
  name: string;

  @Prop({ type: String, required: true })
  userId: string;
}

export const DataSchema = SchemaFactory.createForClass(Data);
export const ResultsSchema = SchemaFactory.createForClass(Results);
export const CoinsCalculationSchema =
  SchemaFactory.createForClass(CoinsCalculation);
