import express from "express";
import { connect } from "./conf/mongoConnect";
import { familyModel } from "./models/familyModel";
import { getAllFamily, getOneFamily, createOneFamily, editOneFamily, deleteOneFamily } from "./controllers/familyControllers";
import { getAllMember, getOneMember, createOneMember, editOneMember, deleteOneMember } from "./controllers/memberController";

const app = express();


app.use(express.json())


// server start

const port = process.env.PORT || 3000;
app.listen(port, () => {
  connect()

  console.log(`Server is running on port ${port}`);
});






// Family Routes

// show family
app.get('/api/family', getAllFamily)

app.get('/api/family/:id', getOneFamily)

// create a family
app.post('/api/family', createOneFamily)

//Edit family
app.put('/api/family/:id', editOneFamily)

// delete family
app.delete('/api/family/:id', deleteOneFamily)


// Member Routes

// show members
app.get('/api/family/:id/member', getAllMember)

app.get('/api/family/:id', getOneMember)

// create a member
app.post('/api/family/:id/member', createOneMember)

//Edit a member
app.put('/api/family/:id/member', editOneMember)

// delete a member
app.delete('/api/family/:id/member', deleteOneMember)
