import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Request,
  UseGuards,
  Logger,
} from '@nestjs/common';
import { CreateCoinsCalculationDto } from './dto/create-coins-calculation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CoinsCalculationsService } from './coins-calculation.service';

@Controller('coins-calculations')
@UseGuards(JwtAuthGuard)
export class CoinsCalculationsController {
  private readonly logger = new Logger(CoinsCalculationsController.name);

  constructor(
    private readonly coinsCalculationsService: CoinsCalculationsService,
  ) {}

  @Post()
  async saveCoinsCalculation(
    @Body() createCoinsCalculationDto: CreateCoinsCalculationDto,
    @Request() req,
  ) {
    this.logger.log('Received saveCoinsCalculation request');
    this.logger.log(`Request User ID: ${req.user.userId}`);
    
    return this.coinsCalculationsService.saveCoinsCalculation(
      createCoinsCalculationDto,
      req.user.userId,
    );
  }

  @Get(':userId')
  async getUserCoinsCalculations(@Param('userId') userId: string) {
    this.logger.log(`Received getUserCoinsCalculations request for userId: ${userId}`);
    return this.coinsCalculationsService.getUserCoinsCalculations(userId);
  }

  @Delete(':userId/:dataId')
  async deleteCoinsCalculation(
    @Param('userId') userId: string,
    @Param('dataId') dataId: string,
  ) {
    this.logger.log(`Received deleteCoinsCalculation request for userId: ${userId} and dataId: ${dataId}`);
    return this.coinsCalculationsService.deleteCoinsCalculation(userId, dataId);
  }
}
