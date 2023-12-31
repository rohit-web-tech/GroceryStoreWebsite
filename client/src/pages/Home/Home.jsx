import React from 'react'
import HeroBanner from './HeroBanner.jsx/HeroBanner'
import Features from './features/Features'
import TopCategories from './topCategories/TopCategories'
import PopularProducts from './PopularProducts/PopularProducts'
import NewArrivals from './newArrivals/NewArrivals'
import useFetch from '../../hooks/useFetch'

const Home = ({setCartItems,cartItems}) => {

  const {loading , data , error } = useFetch('/getProductsDetail');
  console.log(data);

  return (
    <>
        <HeroBanner/>
        <Features title="Our Features" />
        <TopCategories/>
        <PopularProducts data={data?.products} setCartItems={setCartItems} cartItems={cartItems}/>
        <NewArrivals data={data?.products} setCartItems={setCartItems} cartItems={cartItems}/>
        </>
  )
}

export default Home
