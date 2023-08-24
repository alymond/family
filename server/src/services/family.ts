import { familyModel } from "models/family";


//family actions

export const getFamily = () => familyModel.find();
export const getFamilyById = (id: string) => familyModel.findById(id);
export const createFamily = (familyName: string) => new familyModel(familyName).save().then((familyName) => family.toObject());
export const deleteFamilyById = (id: string) => familyModel.findOneAndDelete({ _id: id });
export const updateFamilyById = (familyName: string) => familyModel.findOneAndUpdate({_familyName: familyName});
