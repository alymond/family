import { familyMemberModel } from "models/familyMembers";




//family actions

export const getFamilyMember = () => familyMemberModel.find();
export const getFamilyMemberById = (id: string) => familyMemberModel.findById(id);
export const createFamilyMember = (values: string) => new familyMemberModel(values).save().then((values) => familyMembers.toObject());
export const deleteFamilyMemberById = (id: string) => familyMemberModel.findOneAndDelete({ _id: id });
export const updateFamilyMemberById = (values: string) => familyMemberModel.findByIdAndUpdate(values);
