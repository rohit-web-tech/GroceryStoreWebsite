const express = require('express');
const route = express.Router();
const cartModel = require('../Models/CartModel');
const userModel = require('../Models/UserModel');
const productModel = require('../Models/ProductModel');

route.post('/addToCart',async(req,res)=>{
    const {productId,userId} = req.body.params ;
    try {
        const product = await productModel.findOne({_id:productId});
        const newCartItem = new cartModel({
            productName : product.productName,
            productId : product._id,
            userId : userId,
            productImg : product.productImg,
            productPrice : product.productPrice,
            productQauntity : 1,
            productUnit : product.productUnit,
        });
        await newCartItem.save();
        const cartItems = await cartModel.find({userId});
        res.json({'message':"success",cartItems});
    } catch (error) {
        res.json(400).json({"message" : "internal server error"})
    }
})

route.post('/getCartData',async(req,res)=>{
    const {userId} = req.body.params ;
    console.log(userId)
    try {
        const cartItems = await cartModel.find({userId});
        res.json({'message':"success",cartItems});
    } catch (error) {
        res.json(400).json({"message" : "internal server error"})
    }
})

route.post('/removeItemFromCart',async(req,res)=>{
    const {itemId,userId} = req.body.params ;
    console.log(itemId)
    try {
        await cartModel.deleteOne({_id:itemId});
        const cartItems = await cartModel.find({userId})
        res.json({'message':"success",cartItems});
    } catch (error) {
        res.json(400).json({"message" : "internal server error"})
    }
})

route.post('/updateCart',async(req,res)=>{
    const {cartItem,quantity} = req.body.params ;
    try {
        const oldCartItem = await cartModel.findOne({_id:cartItem._id});
        oldCartItem.productQauntity = Number(quantity) ;
        await oldCartItem.save();
        res.json({message:'success'})
    } catch (error) {
        res.status(400).json({message:"internal server error"})
    }
})



module.exports = route ;