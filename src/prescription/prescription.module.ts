import { Module } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { PrescriptionController } from './prescription.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PrescriptionSchema } from './prescription.model';
import { UsersSchema } from '../users/users.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Prescription', schema: PrescriptionSchema },
      { name: 'User', schema: UsersSchema },
    ]),
  ],
  controllers: [PrescriptionController],
  providers: [PrescriptionService],
})
export class PrescriptionModule {}
