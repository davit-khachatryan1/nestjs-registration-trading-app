import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CoinsCalculationService } from './coins-calculation.service';
import { CreateCoinsCalculationDto } from './dto/create-coins-calculation.dto';

@Controller('coins-calculations')
export class CoinsCalculationController {
  constructor(
    private readonly coinsCalculationService: CoinsCalculationService,
  ) {}

  @Post()
  async addCoinsCalculation(
    @Body() createCoinsCalculationDto: CreateCoinsCalculationDto,
  ) {
    return this.coinsCalculationService.addCoinsCalculation(
      createCoinsCalculationDto,
    );
  }

  @Get(':userId')
  async getUserCoinsCalculations(@Param('userId') userId: string) {
    return this.coinsCalculationService.getUserCoinsCalculations(userId);
  }

  @Put(':userId/:dataId')
  async updateCoinsCalculation(
    @Param('userId') userId: string,
    @Param('dataId') dataId: number,
    @Body() updateCoinsCalculationDto: Partial<CreateCoinsCalculationDto>,
  ) {
    return this.coinsCalculationService.updateCoinsCalculation(
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
    return this.coinsCalculationService.deleteCoinsCalculation(userId, dataId);
  }
}
