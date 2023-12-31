const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName : {
        type : String ,
        required : true 
    },
    productImg : {
        type : String ,
        required : true 
    },
    productCategory : {
        type : String ,
        required : true 
    },
    productPrice : {
        type : Number ,
        require : true 
    },
    productUnit : {
        type : String ,
        require : true 
    }
},{
    timestamps : true 
});

const productsModel = mongoose.model('products',productSchema);

module.exports = productsModel ;