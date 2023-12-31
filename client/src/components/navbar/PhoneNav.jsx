import React from 'react'
import './phone.scss'
import { useNavigate } from 'react-router-dom'

const PhoneNav = (props) => {
  const navigate = useNavigate();
  return (
    <div id="phone-nav">
      <div className="phone-nav">
        <ul className='nav-items'>
          <li className='nav-item active' onClick={()=>{
            props.removeMenu();
            navigate('/');
          }}>Home</li>
          <li className='nav-item' onClick={()=>{
            props.removeMenu();
            navigate('/shop');
          }}>Shop</li>
          <li className='nav-item' onClick={()=>{
            props.removeMenu();
            navigate('/about');
          }}>About Us</li>
          <li className='nav-item' onClick={()=>{
            props.removeMenu();
            navigate('/contact');
          }}>Contact Us</li>
        </ul>
        <div className="close-nav-btn" onClick={props.removeMenu}>
          <i className="fa-solid fa-close"></i>
        </div>
      </div>
    </div>
  )
}

export default PhoneNav
