import { getFamilyMember, getFamilyMemberById, createFamilyMember, updateFamilyMemberById, deleteFamilyMemberById } from "services/familyMembers";
import express from 'express';
import { familyMemberModel } from "models/familyMembers";


// show family member
export async function showFamilyMember(req: express.Request, res: express.Response){
  try {

    const family = await getFamilyMember();

    return res.status(200).json(family);

  } catch (error) {
    console.error(error)

    return res.sendStatus(400);
  }
};

// show a single family member
export async function showFamilyMemberById(req: express.Request, res: express.Response) {
  try {

    const { id } = req.params;
    
    const family = await getFamilyMemberById(id);

    return res.status(200).json(family);

  } catch (error) {
    
    console.error(error);

    return res.sendStatus(400);

  }
};

// create a new family member
export async function newFamilyMember(req: express.Request, res: express.Response) {
  try {
    
    const { id } = req.params;

    const family = await createFamilyMember(id);

    return res.status(200).json(family);

  } catch (error) {
    
    console.error(error);

    return res.sendStatus(400)
  }
};

// edit a family member
export async function editFamilyMember (req: express.Request, res: express.Response) {
  try {
    const { id } = req.params;
    const { values } = req.body;

    if (!values) {
      return res.sendStatus(400);
    }

    const familyName = await getFamilyMemberById(id);
    
    updateFamilyMemberById.values = { firstName<string>, lastName<string>, relationshipType<string>, gender<string> };
    await familyName.save();

    return res.status(200).json(familyName).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

// delete a family member (this sounds wrong and im concerned about word choices for comments)

export async function deletefamilMember(req: express.Request, res: express.Response) {
  try {
    const { id } = req.params;

    const deletedFamily = await deleteFamilyMemberById(id);

    return res.json(deletedFamily);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

