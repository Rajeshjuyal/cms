import * as mongoose from 'mongoose';
import {
  ArrayMinSize,
  IsBoolean,
  IsEmpty,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer/decorators';
import { CouponsDTO } from '../coupons/coupons.model';

export const ProductsSchema = new mongoose.Schema(
  {
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categories',
    },
    // new deal section
    isDealAvailable: {
      type: Boolean,
      default: true,
    },
    delaPercent: {
      type: Number,
      default: 0,
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subcategories',
    },
    //******************** */
    type: {
      type: String,
    },
    variant: [
      {
        // title:String,
        productstock: Number,
        unit: String,
        price: Number,
        tax: Number,
        enable: Boolean,
      },
    ],
    imageUrl: {
      type: String,
    },
    imageId: {
      type: String,
    },
    filePath: {
      type: String,
    },
    status: {
      type: Number,
      default: 1,
    },
    averageRating: {
      type: Number,
    },
    totalRating: {
      type: Number,
    },
    noOfUsersRated: {
      type: Number,
    },
    objectID: {
      type: String,
    },
  },
  { timestamps: true },
);

export class ProductsDTO {
  brand: string;
  @IsOptional()
  _id: string;

  @IsOptional()
  @ApiModelProperty()
  title: string;

  @IsNotEmpty()
  @ApiModelProperty()
  description: string;

  // @IsNotEmpty()
  // @IsNumber()
  @ApiModelProperty()
  price: number;

  @IsOptional()
  @ApiModelProperty()
  user: string;

  @IsOptional()
  type: String;

  @IsNotEmpty()
  @IsMongoId()
  @ApiModelProperty()
  category: string;

  @ApiModelProperty()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => VariantDTO)
  variant: VariantDTO[];

  @IsOptional()
  @IsBoolean()
  isDealAvailable: boolean;

  @IsOptional()
  delaPercent: number;

  // @IsNotEmpty()
  // @ApiModelProperty()
  // weight: string;

  @IsNotEmpty()
  @ApiModelProperty()
  imageUrl: string;

  @IsNotEmpty()
  @ApiModelProperty()
  filePath: string;

  @ApiModelProperty()
  productstock: Number;

  @ApiModelProperty()
  unit: String;

  @ApiModelProperty()
  imageId: string;

  @ApiModelProperty()
  subcategory: string;

  @IsOptional()
  @ApiModelProperty()
  status: number;

  @IsOptional()
  averageRating: number;

  @IsOptional()
  totalRating: number;

  @IsOptional()
  noOfUsersRated: number;
}

export class VariantData {
  // title:String;
  productstock: Number;
  unit: String;
  price: Number;
  tax: Number;
  enable: Boolean;
  offerAmount: number;
}

export class VariantDTO {
  @IsNotEmpty()
  @IsNumber()
  @ApiModelProperty()
  productstock: number;

  @IsNotEmpty()
  @ApiModelProperty()
  unit: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiModelProperty()
  price: number;

  @IsNumber()
  @ApiModelProperty()
  tax: number;

  @IsNotEmpty()
  @IsBoolean()
  @ApiModelProperty()
  enable: boolean;
}

export class PuductStatusDTO {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  @ApiModelProperty()
  status: number;
}

//export class DealProductDTO {
//  @IsOptional()
// delaPercent: number;

//@IsOptional()
//isDealAvailable: boolean;

//@IsOptional()
//@IsMongoId()
//dealId: string
//}
