import express from 'express'
import { familyModel } from '../models/familyModel';
import { memberModel } from '../models/memberModel';

// show family
export const getAllFamily = async(req: express.Request, res: express.Response) => {
    try {
        const family = await familyModel.find({});
        res.status(200).json(family);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getOneFamily = async(req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const family = await familyModel.findById(id);
        res.status(200).json(family);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// create a family


export const createOneFamily = async (req: express.Request, res: express.Response) => {
    try {
        const family = await familyModel.create(req.body);
        res.status(200).json(family);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

//Edit family

export const editOneFamily = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const updatedFamilyData = req.body;

        const family = await familyModel.findByIdAndUpdate(id, updatedFamilyData);

        if (!family) {
            return res.status(404).json({ message: `Cannot find family with ID ${id}` });
        }

        // Update family name within associated members
        await memberModel.updateMany({ family: id }, { $set: { "familyName": updatedFamilyData.familyName } });

        const editedFamily = await familyModel.findById(id);
        res.status(200).json(editedFamily);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// delete family

export const deleteOneFamily = async(req: express.Request, res: express.Response) =>{
    try {
        const {id} = req.params;
        const family = await familyModel.findByIdAndDelete(id);
        if(!family){
            return res.status(404).json({message: `cannot find family with ID ${id}`})
        }
        res.status(200).json(family);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
