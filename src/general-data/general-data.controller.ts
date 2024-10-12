// general-data.controller.ts
import { Controller, Post, Get, Param, Body, Patch } from '@nestjs/common';
import { GeneralDataService } from './general-data.service';
import { CreateGeneralDataDto } from './dto/create-general-data.dto';

@Controller('general-data')
export class GeneralDataController {
  constructor(private readonly generalDataService: GeneralDataService) {}

  // Create general data
  @Post()
  async createGeneralData(@Body() createGeneralDataDto: CreateGeneralDataDto) {
    return this.generalDataService.createGeneralData(createGeneralDataDto);
  }

  // Get general data by ID
  @Get(':id')
  async getGeneralData(@Param('id') id: string) {
    return this.generalDataService.findGeneralDataById(id);
  }

  // Update general data
  @Patch(':id')
  async updateGeneralData(
    @Param('id') id: string,
    @Body() updateGeneralDataDto: Partial<CreateGeneralDataDto>,
  ) {
    return this.generalDataService.updateGeneralData(id, updateGeneralDataDto);
  }
}
