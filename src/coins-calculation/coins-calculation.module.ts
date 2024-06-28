import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoinsCalculationsController } from './coins-calculation.controller';
import { CoinsCalculationsService } from './coins-calculation.service';
import { CoinsCalculation, CoinsCalculationSchema } from './schema/coins-calculation.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: CoinsCalculation.name, schema: CoinsCalculationSchema }])],
  controllers: [CoinsCalculationsController],
  providers: [CoinsCalculationsService],
})
export class CoinsCalculationsModule {}
