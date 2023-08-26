import mongoose, { Schema } from "mongoose";

const familySchema = new Schema({
  familyName: { type: String, required: true }
});

familySchema.virtual('members', {
  ref: 'Member',
  localField: '_id',
  foreignField: 'family'
});

export const familyModel = mongoose.model('Family', familySchema);