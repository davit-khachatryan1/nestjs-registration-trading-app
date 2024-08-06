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
import { JwtAuthGuard } from 'src/auth/guards/JwtAuthGuard';
import { CoinsCalculationsService } from './coins-calculation.service';

@Controller('coins-calculations')
@UseGuards(JwtAuthGuard) // Apply guard to ensure routes are protected
export class CoinsCalculationsController {
  private readonly logger = new Logger(CoinsCalculationsController.name);
  constructor(
    private readonly coinsCalculationsService: CoinsCalculationsService,
  ) {
    console.log('fffffffffff');
    
  }

  @Post()
  async addCoinsCalculation(
    @Body() createCoinsCalculationDto: CreateCoinsCalculationDto,
    @Request() req,
  ) {
    this.logger.log('Received addCoinsCalculation request');
    this.logger.log(`Request User ID: ${req.user.userId}`);
    
    return this.coinsCalculationsService.addCoinsCalculation(
      createCoinsCalculationDto,
      req.user.userId,  // Extract userId from the request object
    );
  }

  @Get(':userId')
  async getUserCoinsCalculations(@Param('userId') userId: string) {
    return this.coinsCalculationsService.getUserCoinsCalculations(userId);
  }

  @Put(':userId/:dataId')
  async updateCoinsCalculation(
    @Param('userId') userId: string,
    @Param('dataId') dataId: string,
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
    @Param('dataId') dataId: string,
  ) {
    return this.coinsCalculationsService.deleteCoinsCalculation(userId, dataId);
  }
}
