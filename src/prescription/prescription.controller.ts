import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { Prescription } from './prescription.model';

@Controller('prescription')
export class PrescriptionController {
  constructor(private readonly prescriptionService: PrescriptionService) {}

  @Post()
  create(@Body() data: Prescription) {
    return this.prescriptionService.create(data);
  }

  @Get()
  findAll() {
    return this.prescriptionService.findAll();
  }
  @Get('byUser/:id')
  findbyUser(@Param('id') id: string) {
    return this.prescriptionService.findUser(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prescriptionService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prescription) {
    return this.prescriptionService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prescriptionService.remove(id);
  }
}
