import { getFamily, getFamilyById, createFamily, updateFamilyById, deleteFamilyById } from "services/family";
import express from 'express';


// show family 
export async function showFamily(req: express.Request, res: express.Response){
  try {

    const family = await getFamily();

    return res.status(200).json(family);

  } catch (error) {
    console.error(error)

    return res.sendStatus(400);
  }
};

// show a single family
export async function showFamilyById(req: express.Request, res: express.Response) {
  try {

    const { id } = req.params;
    
    const family = await getFamilyById(id);

    return res.status(200).json(family);

  } catch (error) {
    
    console.error(error);

    return res.sendStatus(400);

  }
};

// create a new family
export async function newFamily(req: express.Request, res: express.Response) {
  try {
    
    const { familyName } = req.params;

    const family = await createFamily(familyName);

    return res.status(200).json(family);

  } catch (error) {
    
    console.error(error);

    return res.sendStatus(400)
  }
};

// edit a family
export async function editFamily (req: express.Request, res: express.Response) {
  try {
    const { id } = req.params;
    const { familyName } = req.body;

    if (!familyName) {
      return res.sendStatus(400);
    }

    const family = await getFamilyById(id);
    
    family.familyName = familyName;
    await familyName.save();

    return res.status(200).json(familyName).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

// delete a family (this sounds wrong and im concerned about word choices for comments)

export async function deleteFamily(req: express.Request, res: express.Response) {
  try {
    const { id } = req.params;

    const deletedFamily = await deleteFamilyById(id);

    return res.json(deletedFamily);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

