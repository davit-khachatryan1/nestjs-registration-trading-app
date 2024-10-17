import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGeneralDataDto } from './dto/create-general-data.dto';
import { User, UserDocument } from 'src/user/user.schema';
import { GeneralData, GeneralDataDocument } from './schema/general-data.schema';

@Injectable()
export class GeneralDataService {
  constructor(
    @InjectModel(GeneralData.name)
    private generalDataModel: Model<GeneralDataDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>, // Inject UserModel here
  ) {}

  // Create new general data for a user
  async createGeneralData(
    createGeneralDataDto: CreateGeneralDataDto,
    userId: string,
  ): Promise<GeneralData> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const generalData = new this.generalDataModel({
      ...createGeneralDataDto,
      user: user._id, // Associate with the user
    });
    return generalData.save();
  }

  // Fetch general data for a specific user
  async getGeneralDataByUserId(userId: string): Promise<GeneralData> {
    return this.generalDataModel.findOne({ user: userId }).populate('user');
  }

  // Update general data for a specific user
  async updateGeneralData(
    userId: string,
    updateDto: CreateGeneralDataDto,
  ): Promise<GeneralData> {
    const data = await this.generalDataModel
      .findOneAndUpdate({ user: userId }, { ...updateDto }, { new: true })
      .populate('user');

    if (!data) {
      this.createGeneralData(updateDto, userId);
    }

    return data;
  }
}
