var userModel=require('../model/users.model')
var jwt=require('jsonwebtoken')
var config=require('../config/config')
exports.registerUser=(req,res)=>{
    var userData=req.body
    var newData=new userModel(userData)
    newData.save((err,doc)=>{
        if(err){
            console.log({error:err.message})
        }
            if(doc){
                res.send({result:true})
            }
    })
}
exports.login=(req,res)=>{
    var userData=req.body
    userModel.findOne({emailId:userData.emailId},(err,docs)=>{
        if(err){
            console.log(err)
        }
        if(docs){
            if(userData.password==docs.password){
                var payload={emailId:userData.emailId}
                var token=jwt.sign(payload,config.config.JWT_SECRET_KEY)
                res.send({result:true,token:token})
            }
        }
        else{
            res.send({result:false})
        }
    })
}