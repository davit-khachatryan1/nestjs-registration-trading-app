// general-data.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GeneralData, GeneralDataDocument } from './schema/general-data.schema';
import { CreateGeneralDataDto } from './dto/create-general-data.dto';

@Injectable()
export class GeneralDataService {
  constructor(
    @InjectModel(GeneralData.name)
    private generalDataModel: Model<GeneralDataDocument>,
  ) {}

  // Create new general data
  async createGeneralData(
    createGeneralDataDto: CreateGeneralDataDto,
  ): Promise<GeneralData> {
    const createdData = new this.generalDataModel(createGeneralDataDto);
    return createdData.save();
  }

  // Find general data for a specific user
  async findGeneralDataById(id: string): Promise<GeneralData> {
    const generalData = await this.generalDataModel.findById(id);
    if (!generalData) {
      throw new NotFoundException(`General data not found for user ID ${id}`);
    }
    return generalData;
  }

  // Update general data
  async updateGeneralData(
    id: string,
    updateDto: Partial<CreateGeneralDataDto>,
  ): Promise<GeneralData> {
    const updatedGeneralData = await this.generalDataModel.findByIdAndUpdate(
      id,
      updateDto,
      {
        new: true,
      },
    );
    if (!updatedGeneralData) {
      throw new NotFoundException(`General data not found for user ID ${id}`);
    }
    return updatedGeneralData;
  }

  // Ensure general data is created if it doesn't exist (can be used during registration)
  async ensureGeneralDataForUser(
    createGeneralDataDto: CreateGeneralDataDto,
  ): Promise<GeneralData> {
    const generalDataExists =
      await this.generalDataModel.findOne(createGeneralDataDto);
    if (!generalDataExists) {
      return this.createGeneralData(createGeneralDataDto);
    }
    return generalDataExists;
  }
}
