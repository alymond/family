import express from 'express'
import { getAllMember, getOneMember, createOneMember, editOneMember, deleteOneMember } from "../controllers/memberController";

const router = express.Router();



export default (router: express.Router) => {
// show members
    router.get('/api/family/:id/member', getAllMember)

    router.get('/api/family/:id/member/:id', getOneMember)

    // create a member
    router.post('/api/family/:id/member', createOneMember)

    //Edit a member
    router.put('/api/family/:id/member/:id', editOneMember)

    // delete a member
    router.delete('/api/family/:id/member/:id', deleteOneMember)

};