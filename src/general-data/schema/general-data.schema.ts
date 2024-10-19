import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/user/user.schema';

export type GeneralDataDocument = GeneralData & Document;

@Schema()
export class GeneralData {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ required: true })
  A242: number;

  @Prop({ required: true })
  D244: number;

  @Prop({ required: true })
  accumulatedBalance: number;

  @Prop({ required: true })
  CG4: number;

  @Prop({ required: true })
  CH4: number;

  @Prop({ required: true })
  E242: number;
}

export const GeneralDataSchema = SchemaFactory.createForClass(GeneralData);
