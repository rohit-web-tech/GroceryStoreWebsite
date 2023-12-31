const express = require('express');
const userModel = require('../Models/UserModel');
const route = express.Router();

route.post('/loginUser',async(req,res)=>{
    const {email,password} = req.body.params ;
    try {
        const user = await userModel.find({userEmail:email});
        console.log(user)
        if(user.length>0){
            if(user[0].userPassword===password){
                res.json({"message":"success",user});
            }else{
                res.json({"message":"Please login with right credentials!!"});
            }
        }else{
            res.json({"message":"Please login with right credentials!!"})
        }
    } catch (error) {
        res.status(400).json({"message":"internal server error"});
    }
})

route.post('/registerUser',async(req,res)=>{
    const {email,password,name,contact} = req.body.params ;
    try {
        const user = await userModel.find({userEmail:email});
        if(user.length>0){
            res.json({message:"User already exist with same email!! Please Login"})
        }else{
            const data = new userModel({
                userName : name,
                userEmail : email ,
                userPassword : password , 
                userContact : contact,
            });
            await data.save() ;
            res.json({"message":"success",data})
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({"message":"internal server error"});
    }
})

route.post('/updateUserProfile',async(req,res)=>{
    const{userDetails} = req.body.params;
    try {
        const {userName,userContact,userEmail,userAddress}=userDetails;
        console.log(userDetails);
        let user = await userModel.findOne({_id:userDetails._id});
        user.userName=userName,user.userAddress=userAddress,user.userContact=userContact;
        await user.save();
        res.json({message:"success",user});
    } catch (error) {
        res.status(400).json({"message":"internal server error"});
    }
})

module.exports = route ;