import React, { useEffect, useState } from 'react'
import './style.scss';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import Img from '../lazyloading/Img';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import PhoneNav from './PhoneNav';
import {useSelector} from 'react-redux' ;

const NavBar = () => {
    const navigate = useNavigate();
    const [showSideMenu,setShowSideMenu] = useState(false);
    const cartItems = useSelector(state=>state.cart.cartItems);

    const showMenu=()=>{
        setShowSideMenu(true);
    }

    const removeMenu=()=>{
        setShowSideMenu(false);
    }
    return (
        <div id="navbar">
            <ContentWrapper>
                <div className="navbar">
                    <div className="logo" onClick={()=>{navigate('/')}}>
                        <Img src={logo} />
                    </div>
                    <ul className="nav-list">
                        <li className="nav-btn active" onClick={()=>{navigate('/')}}>Home</li>
                        <li className="nav-btn" onClick={()=>{navigate('/shop/all')}}>Shop Now</li>
                        <li className="nav-btn" onClick={()=>{navigate('/about')}}>About Us</li>
                        <li className="nav-btn" onClick={()=>{navigate('/contact')}}>Contact Us</li>
                    </ul>
                    <div className="icons">
                        <div className="cart" onClick={()=>{navigate('/cart')}}>
                            <i class="fa-solid fa-cart-shopping cart-icon"></i>
                            <div className="cart-count">{cartItems?.length || "0"}</div>
                        </div>
                        <div className="user" onClick={()=>{navigate('/user')}}><i class="fa-solid fa-user"></i></div>
                        <div id="side-menu" onClick={showMenu}><i className="fa-solid fa-bars"></i></div>
                    </div>
                </div>
            </ContentWrapper>
            {showSideMenu&&<PhoneNav removeMenu={removeMenu}/>}
        </div>
    )
}

export default NavBar;
