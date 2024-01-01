import React, { useState } from "react";
import Img from "../../../components/lazyloading/Img";
import { fetchPostDataFromApi } from "../../../utiles/api";
import {useSelector,useDispatch} from 'react-redux' ;
import { updateCart } from "../../../slice/cartSlice";

const TableData = ({ handleRemoveFromCart, cartItem, index }) => {
  const cartItems = useSelector(state=>state.cart.cartItems);
  const dispatch = useDispatch();
  const handleQuantityChange = (e) => {
    const temp = [...cartItems];
    if(e.target.value<0){
      temp[index] = { ...cartItem, productQauntity: 0 };
    }else{
      temp[index] = { ...cartItem, productQauntity: e.target.value };
    }
    dispatch(updateCart(temp));
    fetchPostDataFromApi("/updateCart", { cartItem, quantity: e.target.value })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <tr className="table-row flex-box align-center">
      <td className="remove-item-column">
        <div
          class="remove-icon"
          onClick={() => {
            handleRemoveFromCart(cartItem?._id);
          }}
        >
          <i class="fa-solid fa-trash"></i>
        </div>
      </td>
      <td className="image-item-column flex-box justify-center">
        <div class="product-image">
          <Img src={cartItem?.productImg} alt="" className="lazy-img" />
        </div>
      </td>
      <td className="name-item-column">
        <div class="product-name">
          <p>{cartItem?.productName}</p>
        </div>
      </td>
      <td className="price-item-column">
        <div class="product-price">
          <p>
            {cartItem?.productPrice}Rs/{cartItem?.productUnit}
          </p>
        </div>
      </td>
      <td className="quantity-item-column">
        <div class="product-quantity">
          <input
            type="number"
            id="product-quantity"
            value={cartItem?.productQauntity}
            onChange={(e) => {
              handleQuantityChange(e);
            }}
          />
        </div>
      </td>
      <td className="subtotal-item-column">
        <div class="product-subtotal">
          <p>{cartItem?.productPrice * cartItem?.productQauntity}Rs</p>
        </div>
      </td>
    </tr>
  );
};

export default TableData;
