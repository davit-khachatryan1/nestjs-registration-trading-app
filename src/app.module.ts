import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CoinsCalculationModule } from './coins-calculation/coins-calculation.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      '',
    ),
    AuthModule,
    CoinsCalculationModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
