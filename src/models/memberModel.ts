import mongoose, { Schema } from "mongoose";

const memberSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  relationshipType: { type: String, required: true },
  gender: { type: String, required: true },
  family: { type: Schema.Types.ObjectId, ref: "Family", required: true }
});

export const memberModel = mongoose.model('Member', memberSchema);
