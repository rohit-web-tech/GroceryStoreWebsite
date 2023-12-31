const express = require('express');
const route = express.Router();
const productsModel = require('../Models/ProductModel');

route.get('/getProductsDetail',async(req,res)=>{
    try {
        const products = await productsModel.find({});
        res.json({"message":"success",products});
    } catch (error) {
        console.log(error);
        res.status(400).json({"message":"internal server error"})
    }
})

module.exports = route ;