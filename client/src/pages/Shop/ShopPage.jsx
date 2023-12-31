import React from 'react'
import TopBanner from '../../components/topBanner/TopBanner';
import bg from '../../assets/products.jpg'
import ShopContent from './ShopContent';
import useFetch from "../../hooks/useFetch";

const ShopPage = ({setCartItems,cartItems}) => {
  const {data,loading} = useFetch('/getProductsDetail') ;
  return (
    <>
    <TopBanner bg={bg} title="#stay_home" subtitle="Order your daily grocery from home and get free delievery."/>
    <ShopContent data={data} setCartItems={setCartItems} cartItems={cartItems}/>
    </>
  )
}

export default ShopPage ;
    