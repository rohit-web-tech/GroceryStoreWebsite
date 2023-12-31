import React from 'react'
import './style.scss' ;
import Img from '../../../components/lazyloading/Img';
import noOrder from '../../../assets/noorder.jpg'
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
    const navigate = useNavigate() ;
  return (
    <div id="empty-cart">
      <Img src={noOrder}/>
      <div className="text">
        <h3>You haven't ordered anything yet!!</h3>
      </div>
        <button onClick={()=>{navigate('/shop')}}>Order Now</button>
    </div>
  )
}

export default EmptyCart
