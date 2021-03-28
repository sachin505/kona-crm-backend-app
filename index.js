var express=require('express')
var app=express()
var DB=require("./config/db.config")
var userRouter=require("./routes/user.routes")
var cors=require('cors')
DB.connect()
app.use(express.json())
app.use(cors())
app.use('/user',userRouter)
app.listen(9011,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server started")
    }
})