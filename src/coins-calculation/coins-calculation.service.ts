import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCoinsCalculationDto } from './dto/create-coins-calculation.dto';
import { CoinsCalculation, CoinsCalculationDocument } from './schema/coins-calculation.schema';

@Injectable()
export class CoinsCalculationsService {
  constructor(
    @InjectModel(CoinsCalculation.name)
    private coinsCalculationModel: Model<CoinsCalculationDocument>,
  ) {}

  async saveCoinsCalculation(createCoinsCalculationDto: CreateCoinsCalculationDto, userId: string): Promise<CoinsCalculation> {
    const existingCalculation = await this.coinsCalculationModel.findOne({
      id: createCoinsCalculationDto.id,
      userId,
    });

    if (existingCalculation) {
      // Update existing calculation
      Object.assign(existingCalculation, createCoinsCalculationDto);
      return existingCalculation.save();
    } else {
      // Add new calculation
      const newCalculation = new this.coinsCalculationModel({
        ...createCoinsCalculationDto,
        userId,
      });
      return newCalculation.save();
    }
  }

  async getUserCoinsCalculations(userId: string): Promise<CoinsCalculation[]> {
    return this.coinsCalculationModel.find({ userId }).exec();
  }

  async deleteCoinsCalculation(userId: string, dataId: string): Promise<CoinsCalculation> {
    const calculation = await this.coinsCalculationModel.findOneAndDelete({
      userId,
      id: dataId,
    });
    if (!calculation) {
      throw new NotFoundException('Coins calculation not found');
    }
    return calculation;
  }
}
