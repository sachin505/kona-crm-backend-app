var express=require('express')
var userRouter=express.Router()
var controller=require('../Controller/user.contoller')
userRouter.post("/register",controller.registerUser)
userRouter.post("/login",controller.login)
module.exports=userRouter