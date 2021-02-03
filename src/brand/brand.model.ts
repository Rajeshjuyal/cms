import * as mongoose from 'mongoose';
export const BrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
});
export interface Brand {
  name: string;
}
