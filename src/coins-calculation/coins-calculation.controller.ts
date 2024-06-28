import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CoinsCalculationsService } from './coins-calculation.service';
import { CreateCoinsCalculationDto } from './dto/create-coins-calculation.dto';

@Controller('coins-calculations')
export class CoinsCalculationsController {
  constructor(
    private readonly coinsCalculationsService: CoinsCalculationsService,
  ) {}

  @Post()
  async addCoinsCalculation(
    @Body() createCoinsCalculationDto: CreateCoinsCalculationDto,
  ) {
    return this.coinsCalculationsService.addCoinsCalculation(
      createCoinsCalculationDto,
    );
  }

  @Get(':userId')
  async getUserCoinsCalculations(@Param('userId') userId: string) {
    return this.coinsCalculationsService.getUserCoinsCalculations(userId);
  }

  @Put(':userId/:dataId')
  async updateCoinsCalculation(
    @Param('userId') userId: string,
    @Param('dataId') dataId: number,
    @Body() updateCoinsCalculationDto: Partial<CreateCoinsCalculationDto>,
  ) {
    return this.coinsCalculationsService.updateCoinsCalculation(
      userId,
      dataId,
      updateCoinsCalculationDto,
    );
  }

  @Delete(':userId/:dataId')
  async deleteCoinsCalculation(
    @Param('userId') userId: string,
    @Param('dataId') dataId: number,
  ) {
    return this.coinsCalculationsService.deleteCoinsCalculation(userId, dataId);
  }
}
