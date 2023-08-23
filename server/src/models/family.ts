import mongoose, { Schema } from "mongoose";


const familySchema = new Schema({
  familyName: { type: String, required: true },
})


export const familyModel = mongoose.model('family', familySchema);
