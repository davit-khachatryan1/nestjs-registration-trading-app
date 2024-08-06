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

  async addCoinsCalculation(
    createCoinsCalculationDto: CreateCoinsCalculationDto,
    userId: string,
  ): Promise<CoinsCalculation> {
    const newCalculation = new this.coinsCalculationModel({
      ...createCoinsCalculationDto,
      userId,
    });
    return newCalculation.save();
  }

  async getUserCoinsCalculations(userId: string): Promise<CoinsCalculation[]> {
    return this.coinsCalculationModel.find({ userId }).exec();
  }

  async updateCoinsCalculation(
    userId: string,
    dataId: string,
    updateCoinsCalculationDto: Partial<CreateCoinsCalculationDto>,
  ): Promise<CoinsCalculation> {
    const calculation = await this.coinsCalculationModel.findOne({
      userId,
      id: dataId,
    });
    if (!calculation) {
      throw new NotFoundException('Coins calculation not found');
    }

    Object.assign(calculation, updateCoinsCalculationDto);
    return calculation.save();
  }

  async deleteCoinsCalculation(
    userId: string,
    dataId: string,
  ): Promise<CoinsCalculation> {
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
