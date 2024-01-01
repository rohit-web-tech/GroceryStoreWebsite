import React, { useEffect, useState } from 'react'
import { fetchPostDataFromApi } from '../../../utiles/api'
import TableData from './TableData'
import {useSelector,useDispatch} from 'react-redux' ;
import { updateCart } from '../../../slice/cartSlice';

export default function CartItemsTable() {

    const loggedInUser = JSON.parse(localStorage.getItem('srpcuser'));
    const cartItems = useSelector(state=>state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) =>{
        fetchPostDataFromApi('/removeItemFromCart',{itemId,userId:loggedInUser._id})
        .then(res=>{
            console.log(res)
            dispatch(updateCart(res.cartItems));
        })
        .catch(err=>console.log(err));
    }

    return ( 
        <div id="cart-table" className='flex-box justify-center align-center'>
            <div class="cart-table">
                <table className='flex-box justify-center flex-column'>
                    <tr className='table-row table-head-row flex-box align-center'>
                        <th className='remove-item-column'>REMOVE</th>
                        <th className='image-item-column flex-box justify-center'>IMAGE</th>
                        <th className='name-item-column'>PRODUCT</th>
                        <th className='price-item-column'>PRICE</th>
                        <th className='quantity-item-column'>QUANTITY</th>
                        <th className='subtotal-item-column'>SUBTOTAL</th>
                    </tr>
                    {
                                cartItems?.map((cartItem,index) => {
                                    return (
                                        <TableData cartItem={cartItem} cartItems={cartItems} index={index} handleRemoveFromCart={handleRemoveFromCart}/>
                                    )
                                })   
                    }
                </table>
            </div>
        </div>
    )
}
