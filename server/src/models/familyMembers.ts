

import mongoose, { Schema } from "mongoose";


const familyMemberSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  relationshipType: { type: String, required: true },
  gender: { type: String, required: true }
})


export const familyMemberModel = mongoose.model('familyMember', familyMemberSchema);

