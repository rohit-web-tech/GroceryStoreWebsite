const express = require('express');
const orderModel = require('../Models/OrderModel');
const productsModel = require('../Models/ProductModel');
const route = express.Router();

route.post('/getOrders',async(req,res)=>{
    const {userId} = req.body.params ;
    console.log(req.body);
    try {
        const orders = await orderModel.find({userId});
        console.log(orders);
        res.json({message:"success",orders});
    } catch (error) {
        res.status(400).json({message:"Internal server error"})
    }
})

module.exports = route ;