import { Injectable, HttpStatus } from '@nestjs/common';

import { Brand } from './brand.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BrandService {
  constructor(@InjectModel('Brand') private readonly brandModel: Model<any>) {}
  public async create(data: Brand) {
    var brands = await this.brandModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: brands,
    };
  }

  public async findAll() {
    var brand = await this.brandModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: brand,
    };
  }

  public async findOne(id: string) {
    var brands = await this.brandModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: brands,
    };
  }

  public async update(id: string, data: Brand) {
    var brands = await this.brandModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: brands,
    };
  }

  public async remove(id: string) {
    var brands = await this.brandModel.findByIdAndDelete(id);
    brands.remove();

    return {
      response_code: HttpStatus.OK,
      response_data: brands,
    };
  }
}
