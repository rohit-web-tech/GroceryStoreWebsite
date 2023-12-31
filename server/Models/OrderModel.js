const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema({
    productId : {
        type : String ,
        require : true 
    },
    userId : {
        type : String ,
        required : true 
    },
    productName : {
        type : String ,
        required : true 
    },
    productImg : {
        type : String ,
        required : true 
    },
    productQuantity : {
        type : Number ,
        required : true 
    },
    productUnit : {
        type : String ,
        required : true 
    },
    paymentStatus : { 
        type : String ,
        require : true 
    },
    orderId : { 
        type : String ,
        require : true 
    },
    paymentId : { 
        type : String ,
        require : true 
    },
    signature : { 
        type : String ,
        require : true 
    },
    status : {
        type : String ,
        require : true ,
        default : 'processing'
    }
},{
    timestamps : true 
});

const orderModel = mongoose.model('orderItems',ordersSchema);

module.exports = orderModel ;