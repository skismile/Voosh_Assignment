const express = require("express");
const app = express.Router();
const OrderModel=require("../Model/Order.Model")
app.get("/", (req, res) => {
  res.send("this is order page");
});
app.post("/", async (req, res) => {
  const body = req.body;

  console.log(body)


try{

    let order=await OrderModel.create(body)
console.log(order);
    res.send({
        message:"order created succesfully"
    });

}catch(e){

console.log(e)
}

});

module.exports = app;
