import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/user/user.schema';

export type GeneralDataDocument = GeneralData & Document;

@Schema()
export class GeneralData {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  user: User;

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
