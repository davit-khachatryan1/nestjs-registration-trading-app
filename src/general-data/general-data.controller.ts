import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { GeneralDataService } from './general-data.service';
import { CreateGeneralDataDto } from './dto/create-general-data.dto';

@Controller('general-data')
export class GeneralDataController {
  constructor(private readonly generalDataService: GeneralDataService) {}

  // Create general data for a user
  @Post(':userId')
  async createGeneralData(
    @Param('userId') userId: string,
    @Body(new ValidationPipe({ whitelist: true }))
    createGeneralDataDto: CreateGeneralDataDto,
  ) {
    return this.generalDataService.createGeneralData(
      createGeneralDataDto,
      userId,
    );
  }

  // Get general data by user ID
  @Get(':userId')
  async getGeneralDataByUserId(@Param('userId') userId: string) {
    return this.generalDataService.getGeneralDataByUserId(userId);
  }

  // Update general data for a user
  @Patch(':userId')
  async updateGeneralData(
    @Param('userId') userId: string,
    @Body() updateGeneralDataDto: CreateGeneralDataDto,
  ) {
    return this.generalDataService.updateGeneralData(
      userId,
      updateGeneralDataDto,
    );
  }
}
