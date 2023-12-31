import React from 'react'
import { fetchPostDataFromApi } from '../../../utiles/api';
import useFetch from '../../../hooks/useFetch';
import logo from '../../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import {message} from 'antd' ;

export default function CartCheckOut({ cartItems, setOrderPlaced, setCartItems ,contextHolder,modal}) {
    const navigate = useNavigate();
    const { data } = useFetch('/getPaymentKey');
    const loggedInUser = JSON.parse(localStorage.getItem('srpcuser'));
    let totalAmount = 0;
    cartItems?.forEach(cartItem => {
        totalAmount += cartItem?.productPrice * cartItem?.productQauntity;
    })

    const handleCheckOut = async () => {
        if (loggedInUser?.userAddress) {
            const confirmed = await modal.confirm({
                title: "Confirm your details!",
                content: "Please make sure that your address is within 5km range from our shop location i.e. from Pahra HP.And your contact number is correct otherwise your order will be cancelled from our side.If you are sure about your details click Ok to continue."
            });
            if (!confirmed) {
                navigate('/user');
            }else{
            message.open({
                type:'success' ,
                content : 'We are processing your request'
            })
            fetchPostDataFromApi('/cartPayments', {
                cartItems
            })
            .then(async (res) => {
                if (res.message === "success") {
                    var options = {
                        "key": data.key,
                        "amount": res.order.amount,
                            "currency": "INR",
                            "name": "Sant Ram Puni Chand",
                            "description": "Cart Transaction",
                            "image": { logo },
                            "order_id": res.order.id,
                            "prefill": {
                                "name": loggedInUser.userName,
                                "email": loggedInUser.userEmail,
                                "contact": loggedInUser.userContact
                            },
                            "handler": function (response) {
                                fetchPostDataFromApi('/paymentVerification', { response, cartItems, userId: loggedInUser._id , amount:res.order.amount})
                                .then(res => {
                                    if (res.success) {
                                        setOrderPlaced(true);
                                            setCartItems(res.cartItems);
                                            navigate(`/paymentVerify?reffrence=${res.paymentId}`);
                                        }
                                    })
                                    .catch(err => console.log(err))
                            },
                            "notes": {
                                "address": "Sant Ram Puni Chand Merchant"
                            },
                            "theme": {
                                "color": "#41de39"
                            }
                        };
                        var rzp1 = new window.Razorpay(options);
                        rzp1.on('payment.failed', function (response) {
                            alert("failed");
                        });
                        rzp1.open();
                        e.preventDefault();
                    }
                })
                .catch(err => console.log(err)) 
            }
            } else {
                const confirmed = await modal.confirm({
                    title: "Please Enter your address!!",
                    content: "Please enter your address before placing the order."
                });
                if (confirmed) {
                    navigate('/user');
                }
            }
        }
        
        console.log(totalAmount);
        return (
            <>
            <div id="check-out" className='flex-box justify-center align-center'>
            <div class="check-out">
                <div class="apply-coupon-section flex-box  flex-column">
                    <h2>Apply Coupon</h2>
                    <form action="#" className='flex-box'>
                        <input type="text" class="coupon-input" placeholder='Enter Coupon Code' />
                        <input type="submit" value="Apply" class="apply-coupon" />
                    </form>
                </div>
                <div class="cart-totals-section flex-box flex-column">
                    <h2>Cart Totals</h2>
                    <table className='checkout-table'>
                        <tr className='check-out-table-row'>
                            <td className='check-out-table-data'>
                                <p>Cart SubTotal</p>
                            </td>
                            <td className='check-out-table-data'>
                                <p>{totalAmount}Rs</p>
                            </td>
                        </tr>
                        <tr className='check-out-table-row'>
                            <td className='check-out-table-data'>
                                <p>Shipping</p>
                            </td>
                            <td className='check-out-table-data'>
                                <p>Free</p>
                            </td>
                        </tr>
                        <tr className='check-out-table-row'>
                            <th className='check-out-table-data'>
                                <p>Total</p>
                            </th>
                            <th className='check-out-table-data'>
                                <p>{totalAmount}Rs</p>
                            </th>
                        </tr>
                    </table>
                    <button class="check-out-btn" onClick={handleCheckOut}>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    </>
    )
}