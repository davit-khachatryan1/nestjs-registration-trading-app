import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoinsCalculationService } from './coins-calculation.service';
import { CoinsCalculationController } from './coins-calculation.controller';
import {
  CoinsCalculation,
  CoinsCalculationSchema,
} from './schema/coins-calculation.schema';
// import {
//   CoinsCalculation,
//   CoinsCalculationSchema,
// } from '../coins-calculation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CoinsCalculation.name, schema: CoinsCalculationSchema },
    ]),
  ],
  controllers: [CoinsCalculationController],
  providers: [CoinsCalculationService],
})
export class CoinsCalculationModule {}
