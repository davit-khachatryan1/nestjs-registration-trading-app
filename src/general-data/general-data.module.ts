import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GeneralDataService } from './general-data.service';
import { GeneralDataController } from './general-data.controller';
import { UserModule } from '../user/user.module'; // Import UserModule
import { GeneralData, GeneralDataSchema } from './schema/general-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GeneralData.name, schema: GeneralDataSchema },
    ]),
    UserModule, // Add this line to import UserModule
  ],
  controllers: [GeneralDataController],
  providers: [GeneralDataService],
})
export class GeneralDataModule {}
