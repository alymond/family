import express from 'express'
import { memberModel } from '../models/memberModel';
import { familyModel } from '../models/familyModel';


// show family
export const getAllMember = async(req: express.Request, res: express.Response) => {
    try {
        const member = await memberModel.find({});
        res.status(200).json(member);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getOneMember = async(req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const member = await memberModel.findById(id);
        res.status(200).json(member);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// create a family


export const createOneMember = async (req: express.Request, res: express.Response) => {
    try {
        const { familyId, ...memberData } = req.body;

        // Check if the family exists
        const existingFamily = await familyModel.findById(familyId);
        if (!existingFamily) {
            return res.status(404).json({ message: "Family not found" });
        }

        // Create a new member and associate with the family
        const newMember = await memberModel.create({ ...memberData, family: familyId });

        res.status(201).json(newMember);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};


//Edit family

export const editOneMember = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { familyId, ...memberData } = req.body;  // Extract familyId separately
        const member = await memberModel.findByIdAndUpdate(id, { ...memberData, family: familyId });
        
        if (!member) {
            return res.status(404).json({ message: `Cannot find member with ID ${id}` });
        }
        const editedMember = await memberModel.findById(id);
        res.status(200).json(editedMember);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete family

export const deleteOneMember = async(req: express.Request, res: express.Response) =>{
    try {
        const {id} = req.params;
        const member = await memberModel.findByIdAndDelete(id);
        if(!member){
            return res.status(404).json({message: `cannot find member with ID ${id}`})
        }
        res.status(200).json(member);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
