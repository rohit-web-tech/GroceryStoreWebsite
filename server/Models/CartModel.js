const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    productName : {
        type : String ,
        required : true 
    },
    productId : {
        type : String ,
        require : true 
    },
    userId : {
        type : String ,
        required : true 
    },
    productImg : {
        type : String ,
        required : true 
    },
    productPrice : {
        type : Number ,
        require : true 
    },
    productQauntity : {
        type : Number ,
        require : true 
    },
    productUnit : {
        type : String ,
        require : true 
    },
    status : {
        type : String ,
        require : true ,
        defualt : "added"
    }
},{
    timestamps : true 
});

const cartModel = mongoose.model('cartItems',cartSchema);

module.exports = cartModel ;