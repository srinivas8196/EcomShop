const express = require("express");

const AuthRouter = express.Router();
// app.get('/', (req, res,next) => {
    
// })

// importing controller ;
const RegisterUser = require("../controller/RegisterUser")
const LoginUser = require("../controller/LoginUser")
const getUser = require("../controller/getUsers")
// const validator =require("../utils/Validator")
const addproduct =  require("../controller/addproduct")
const showproduct = require("../controller/showproduct")
AuthRouter.post("/register",RegisterUser)
AuthRouter.post("/login", LoginUser)
AuthRouter.get("/user", getUser)
AuthRouter.get("/addproduct",addproduct)
AuthRouter.post("/list", showproduct)



AuthRouter.get("/login", (req, res) => {
    res.send("login")
})

module.exports = AuthRouter;