import React, { useState } from 'react'
import Img from '../../../components/lazyloading/Img'
import { fetchPostDataFromApi } from '../../../utiles/api';

const TableData = ({handleRemoveFromCart,cartItem,index,handleQuantityChange}) => {
  return (
    <tr className='table-row flex-box align-center'>
                                    <td className='remove-item-column'>
                                        <div class="remove-icon" onClick={()=>{handleRemoveFromCart(cartItem?._id)}}>
                                            <i class="fa-solid fa-trash"></i>
                                        </div>
                                    </td>
                                    <td className='image-item-column flex-box justify-center'>
                                        <div class="product-image">
                                            <Img src={cartItem?.productImg} alt="" className='lazy-img' />
                                        </div>
                                    </td>
                                    <td className='name-item-column'>
                                        <div class="product-name">
                                            <p>{cartItem?.productName}</p>
                                        </div>
                                    </td>
                                    <td className='price-item-column'>
                                        <div class="product-price">
                                            <p>{cartItem?.productPrice}Rs/{cartItem?.productUnit}</p>
                                        </div>
                                    </td>
                                    <td className='quantity-item-column'>
                                        <div class="product-quantity">
                                            <input type="number" id="product-quantity" value={cartItem?.productQauntity} onChange={(e)=>{handleQuantityChange(e,index,cartItem)}}/>
                                        </div>
                                    </td>
                                    <td className='subtotal-item-column'>
                                        <div class="product-subtotal">
                                            <p>{cartItem?.productPrice*cartItem?.productQauntity}Rs</p>
                                        </div>
                                    </td>
                                </tr>
  )
}

export default TableData
