import express from 'express'
import { getAllFamily, getOneFamily, createOneFamily, editOneFamily, deleteOneFamily } from "../controllers/familyControllers";


const router = express.Router();



export default (router: express.Router) => {
    // Family Routes

    // show family
    router.get('/api/family', getAllFamily)

    router.get('/api/family/:id', getOneFamily)

    // create a family
    router.post('/api/family', createOneFamily)

    //Edit family
    router.put('/api/family/:id', editOneFamily)

    // delete family
    router.delete('/api/family/:id', deleteOneFamily)
};