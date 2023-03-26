// mvc => model ,view and controllers
const express = require("express")
const mongoose = require('mongoose');

// connect mongodb;
const app = express();
app.use(express.json())



//
//db connection
mongoose.connect('mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch7t')
  .then(() => console.log('Connected!'));

 const SignupRouter = require("./routes/route")


//middleware 
// validator => 
// app.use("/auth",SignupRouter);

// /signup/register
app.listen("3000", () => {
    console.log("server is runing in 3000");
})