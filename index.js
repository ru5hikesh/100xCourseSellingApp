const express = require("express");
const { getRouter } = require("./routes/getRoutes.js");
const { postRouter } = require("./routes/postRoutes.js");
const {
  userModel,
  adminModel,
  purchaseModel,
  courseModel,
} = require("./db.js");

const { mongoose } = require("mongoose");

const app = express();
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;

async function startServer() {
  try{
    mongoose.connect(MONGO_URL)
    console.log("connected to DB")

    app.listen(3000, () => {
      console.log("server running on http://localhost:3000/")
    })
  }catch(e){
    console.log("DB connection Error: ", e)
    process.exit(1);
  }
}

app.use("/", getRouter);
app.use("/user", postRouter);

startServer()