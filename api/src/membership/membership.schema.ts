import * as mongoose from 'mongoose';

export const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
});
