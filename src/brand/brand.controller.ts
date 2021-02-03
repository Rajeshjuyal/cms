import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BrandService } from './brand.service';
import { Brand } from './brand.model';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  create(@Body() data: Brand) {
    return this.brandService.create(data);
  }

  @Get()
  findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Brand) {
    return this.brandService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandService.remove(id);
  }
}
