import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CoinsCalculationsModule } from './coins-calculation/coins-calculation.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://khachatryandavit55:bqHnmqzyMdVhVtEl@cluster0.knqf3ei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    AuthModule,
    UserModule,
    CoinsCalculationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
