import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CoinsCalculationsModule } from './coins-calculation/coins-calculation.module';
import { UserModule } from './user/user.module';
import { GeneralDataModule } from './general-data/general-data.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://armansanasaryan91:cJi8bdNtvYNC4G2@cluster0.fgwreq1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    AuthModule,
    UserModule,
    CoinsCalculationsModule,
    GeneralDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
