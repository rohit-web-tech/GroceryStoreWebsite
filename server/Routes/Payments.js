const Razorpay = require('razorpay');
const express = require('express');
const crypto = require('crypto');
const orderModel = require('../Models/OrderModel');
const cartModel = require('../Models/CartModel');
const route = express.Router();

route.post('/cartPayments', async (req, res) => {
    const { cartItems } = req.body.params;
    try {
        let totalAmount = 0;
        await cartItems?.forEach(cartItem => {
            totalAmount += cartItem?.productPrice * cartItem?.productQauntity;
        })
        var instance = await new Razorpay({ key_id: process.env.key_id, key_secret: process.env.key_secret })
        var options = {
            amount: totalAmount * 100,
            currency: "INR",
            receipt: "order_rcptid_11"
        };
        instance.orders.create(options, function (err, order) {
            if (err) {
                console.log(err)
                res.json({ message: "error", err });
            } else {
                res.json({ message: "success", order });
            }
        });

    } catch (err) {
        res.status(400).json({ message: "internal server error" });
    }
})

route.get('/getPaymentKey', (req, res) => {
    res.json({ message: "success", key: process.env.key_id });
})

route.post('/paymentVerification', async (req, res) => {
    const { response, cartItems , userId , amount} = req.body.params;
    const { razorpay_payment_id, razorpay_signature, razorpay_order_id } = response;
    console.log(response);
    console.log(amount/100)
    try {
        let hmac = crypto.createHmac('sha256', process.env.key_secret);
        hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
        const generated_signature = hmac.digest('hex');
        console.log(razorpay_signature, generated_signature);
        if (razorpay_signature === generated_signature) {
            await cartItems.forEach(async (cartItem) => {
                const newOrder = new orderModel({
                    productId: cartItem.productId,
                    userId: cartItem.userId,
                    productName : cartItem.productName,
                    productImg : cartItem.productImg,
                    productQuantity : cartItem.productQauntity,
                    productUnit : cartItem.productUnit,
                    paymentStatus: "done",
                    orderId: razorpay_order_id,
                    paymentId: razorpay_payment_id,
                    signature: razorpay_signature
                })
                await newOrder.save();
            });
            await cartItems.forEach(async(cartItem) => {
                await cartModel.deleteOne({userId:cartItem.userId});
            });
            const newCartItems = await cartModel.find({userId});
            res.json({ success: true, message: "Payment has been verified", paymentId: razorpay_payment_id , newCartItems})
        }
        else
            res.json({ success: false, message: "Payment verification failed" })
    } catch (error) {
        res.status(400).json({ message: "internal server error" })
    }
})

module.exports = route;