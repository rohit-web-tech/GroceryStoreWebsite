import React from 'react'
import './style.scss' ;
import Img from '../lazyloading/Img';
import paymentVerify from '../../assets/payment.jpg'
import { useNavigate, useSearchParams } from 'react-router-dom';

const VerifyPage = () => {
    const navigate = useNavigate() ;
    const [reffrence] = useSearchParams()[0];
  return (
    <div id="verify-page">
      <div className="verify-page">
        <Img src={paymentVerify} />
        <div className="verify-text">
            <h3>Order Placed Successfully.</h3>
            <p>Reffrence no: {reffrence}</p>
            <p>Thanks for choosing us :)</p>
        </div>
            <button onClick={()=>{navigate('/user')}}><i class="fa-solid fa-arrow-left"></i>Check Order Status</button>
      </div>
    </div>
  )
}

export default VerifyPage ;
