const express=require('express')
const mongoose=require("mongoose")

const app=express()
const UserRouter=require("./Routes/User.Route")
const OrderRouter=require("./Routes/Order.Router")
const cors=require("cors")
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(express.json())
app.use("/user",UserRouter)
app.use("/order",OrderRouter)
app.get('/',(req,res)=>{res.send('hello')})



mongoose.connect("mongodb+srv://skismile:7867@cluster0.dldjmxt.mongodb.net/test",()=>{


    app.listen(8080,()=>{console.log('server is runing on port 8080')})

})
