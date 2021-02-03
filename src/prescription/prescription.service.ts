import { Injectable, HttpStatus } from '@nestjs/common';

import { Prescription, PrescriptionSchema } from './prescription.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PrescriptionService {
  constructor(
    @InjectModel('Prescription') private readonly prescriptionModel: Model<any>,
    @InjectModel('User') private readonly UserModel: Model<any>,
  ) {}
  public async create(data: Prescription) {
    var prescription = await this.prescriptionModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: prescription,
    };
  }

  public async findAll() {
    var prescription = await this.prescriptionModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: prescription,
    };
  }
  public async findUser(id: string) {
    var profile = await this.prescriptionModel.find({ user: id });
    return {
      response_code: HttpStatus.OK,
      response_data: profile,
    };
  }

  public async findOne(id: string) {
    var prescription = await this.prescriptionModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: prescription,
    };
  }

  public async update(id: string, data: Prescription) {
    var prescription = await this.prescriptionModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: prescription,
    };
  }

  public async remove(id: string) {
    var prescription = await this.prescriptionModel.findByIdAndDelete(id);
    prescription.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: 'prescription deleted',
    };
  }
}
