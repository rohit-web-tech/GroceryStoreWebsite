import React from 'react'
import './style.scss' ;
import Img from '../../../components/lazyloading/Img';
import emptycart from '../../../assets/empty-cart.jpg'
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
    const navigate = useNavigate() ;
  return (
    <div id="empty-cart">
      <Img src={emptycart}/>
      <div className="text">
        <h3>There is nothing in cart!!</h3>
      </div>
        <button onClick={()=>{navigate('/shop')}}>Shop Now</button>
    </div>
  )
}

export default EmptyCart
