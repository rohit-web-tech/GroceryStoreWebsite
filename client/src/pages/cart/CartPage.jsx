import React from 'react'
import TopBanner from '../../components/topBanner/TopBanner'
import CartItemsTable from './CartItems/CartItem';
import CartCheckOut from './CheckOut/CartCheckOut';
import './style.css';
import EmptyCart from './EmptyCart/EmptyCart';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import bg from '../../assets/cart-full.jpg';
import { Modal } from 'antd';

export default function CartPage({cartItems,setCartItems,setOrderPlaced,handleQuantityChange}) {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <>
      <TopBanner bg={bg} title="#cart" subtitle="Add your coupon code and SAVE upto 70%!" />
      <ContentWrapper>
        {
          (cartItems?.length>0) ? (
            <>
              <CartItemsTable cartItems={cartItems} setCartItems={setCartItems} handleQuantityChange={handleQuantityChange}/>
              <CartCheckOut cartItems={cartItems} setCartItems={setCartItems} setOrderPlaced={setOrderPlaced} modal={modal}/>
            </>
          ) : (
            <EmptyCart />
          )
        }
      </ContentWrapper>
    {contextHolder}
    </>
  )
}