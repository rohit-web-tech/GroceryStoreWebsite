const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName : {
        type : String ,
        required : true 
    },
    userEmail : {
        type : String ,
        require : true 
    },
    userPassword : {
        type : String ,
        required : true 
    },
    userAddress : {
        type : String 
    },
    userContact : {
        type : Number ,
        require : true 
    },
    isAdmin : {
        type : Boolean ,
        require : true ,
        default : false 
    }
},{
    timestamps : true 
});

const userModel = mongoose.model('userData',userSchema);

module.exports = userModel ;