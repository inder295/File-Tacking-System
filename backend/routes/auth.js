const express=require('express');
const router=express.Router();
const {registerUser,loginUser}=require("../cantrollers/auth");
const { verifyToken } = require('../middlewares/verifyToken');

router.post("/register",registerUser);

router.post("/login",verifyToken,loginUser);


module.exports=router;