import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GeneralDataDocument = GeneralData & Document;

@Schema()
export class GeneralData {
  @Prop({ required: true })
  balance: number;

  @Prop({ required: true })
  initialBalance: number;

  @Prop({ required: true })
  accumulatedBalance: number;

  @Prop({ required: true })
  numberOfLongs: number;

  @Prop({ required: true })
  numberOfShorts: number;

  @Prop({ required: true })
  coinQuantity: number;
}

export const GeneralDataSchema = SchemaFactory.createForClass(GeneralData);
