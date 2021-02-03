import * as mongoose from 'mongoose';
export const PrescriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  file_path_id: { type: String, required: true },
  image_url: { type: String, REQUIRED: true },
  no_of_days: { type: String, required: true },
});
export interface Prescription {
  user: string;
  file_path_id: string;
  image_url: string;
  no_of_days: string;
}
