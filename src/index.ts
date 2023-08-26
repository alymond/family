import express from "express";
import { connect } from "./conf/mongoConnect";
import router from './router/index'


const app = express();


app.use(express.json())

// server start

const port = process.env.PORT || 8080;
app.listen(port, () => {
  connect()
  console.log(`Server port ${port}`);
});


//Router
app.use('/', router());

