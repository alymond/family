import Express from "express";
import { connect } from "./conf/mongo";


const app = Express();

// server start

const port = process.env.PORT || 3000;
app.listen(port, () => {
  connect()

  console.log(`Server is running on port ${port}`);
});
//

