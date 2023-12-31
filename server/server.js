const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const productsRoute = require('./Routes/ProductsRoute');
const userRoute = require('./Routes/UserRoute');
const cartRoute = require('./Routes/CartRoute');
const payments = require('./Routes/Payments')
const orders = require('./Routes/OrdersRoute')
require('./dbconfig');
dotenv.config(); 


app.use(express.json());
app.use(cors());
app.use(productsRoute);
app.use(userRoute);
app.use(cartRoute);
app.use(payments);
app.use(orders);

app.get('/',(req,res)=>{
    res.send("This is Rohit's server!!")
})


app.listen(8800,()=>{
    console.log("server is running on port 8800 !!") ;
})