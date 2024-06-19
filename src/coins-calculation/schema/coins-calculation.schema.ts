import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CoinsCalculationDocument = CoinsCalculation & Document;

@Schema()
export class Data {
  @Prop({ type: Number, required: true })
  Y4: number;

  @Prop({ type: Number, required: true })
  A242: number;

  @Prop({ type: Number, required: true })
  D244: number;

  @Prop({ type: Number, required: true })
  E242: number;

  @Prop({ type: Number, required: true })
  B4: number;

  @Prop({ type: Number, required: true })
  C4: number;

  @Prop({ type: Number, required: true })
  D4: number;

  @Prop({ type: Number, required: true })
  E4: number;

  @Prop({ type: Number, required: true })
  G4: number;

  @Prop({ type: Number, required: true })
  N4: number;

  @Prop({ type: Number, required: true })
  O4: number;

  @Prop({ type: Number, required: true })
  P4: number;

  @Prop({ type: Number, required: true })
  P5: number;

  @Prop({ type: Number, required: true })
  CG4: number;

  @Prop({ type: Number, required: true })
  CH4: number;
}

@Schema()
export class Results {
  @Prop({ type: Number, required: true })
  result_BE4: number;

  @Prop({ type: Number, required: true })
  result_B5: number;

  @Prop({ type: Number, required: true })
  result_C5: number;

  @Prop({ type: Number, required: true })
  result_D5: number;

  @Prop({ type: Number, required: true })
  result_E5: number;

  @Prop({ type: Number, required: true })
  result_B6: number;

  @Prop({ type: Number, required: true })
  result_C6: number;

  @Prop({ type: Number, required: true })
  result_D6: number;

  @Prop({ type: Number, required: true })
  result_E6: number;

  @Prop({ type: Number, required: true })
  result_F4: number;

  @Prop({ type: Number, required: true })
  result_C244: number;

  @Prop({ type: Number, required: true })
  result_L6: number;

  @Prop({ type: Number, required: true })
  result_G6: number;

  @Prop({ type: Number, required: true })
  result_T4: number;

  @Prop({ type: Number, required: true })
  result_L2: number;

  @Prop({ type: Number, required: true })
  result_L4: number;

  @Prop({ type: Number, required: true })
  result_H3: number;

  @Prop({ type: Number, required: true })
  result_I3: number;

  @Prop({ type: Number, required: true })
  result_J3: number;

  @Prop({ type: Number, required: true })
  result_K3: number;

  @Prop({ type: Number, required: true })
  result_M4: number;

  @Prop({ type: Number, required: true })
  result_Q4: number;

  @Prop({ type: Number, required: true })
  priceAccordingAccumulatedBalance: number;

  @Prop({ type: Number, required: true })
  accumulatedBalance: number;

  @Prop({ type: Number, required: true })
  accumulatedBalanceForPosition: number;

  @Prop({ type: Number, required: true })
  averagedRationalTradingMargin: number;
}

@Schema()
export class CoinsCalculation {
  @Prop({ required: true })
  id: number;

  @Prop({ type: Data, required: true })
  data: Data;

  @Prop({ type: Results, required: true })
  results: Results;

  @Prop({ type: String, required: true })
  userId: string;
}

export const DataSchema = SchemaFactory.createForClass(Data);
export const ResultsSchema = SchemaFactory.createForClass(Results);
export const CoinsCalculationSchema =
  SchemaFactory.createForClass(CoinsCalculation);
