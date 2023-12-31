import React from 'react' ;
import './style.css' ;
import logo from '../../assets/logo.png';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import pay from '../../assets/pay.webp' ;

export default function Footer() {
  return (
    <div id="footer" className='flex-box justify-center align-center flex-column'>
        <ContentWrapper>
        <div className="footer">
            <div className="footer-contact">
                <div className="logo-footer">
                    <img src={logo} alt=""  className='lazy-img'/>
                </div>
                <div className="contact">
                    <h4 className="heading">Contact</h4>
                    <div className="contact-details flex-box justify-center flex-column">
                    <p className="details-footer"><span className="bold">Address:</span>Sant Ram Puni Chand Kirana Merchant Kothi, Pahra, Kangra - 176087</p>
                    <p className="details-footer"><span className="bold">Phone:</span>+287-1827872</p>
                    <p className="details-footer"><span className="bold">Hours:</span>10:00-18:00 Mon-Sat</p>
                    </div>
                </div>
                <div className="social-media">
                    <h4 className="heading">Follow Us</h4>
                    <div className="brands-logo flex-box align-center">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div className="footer-user-options">
                <div className="about">
                <h4 className="heading">About</h4>
                    <div className="user-options flex-box flex-column">
                    <p className="details-footer">About Us</p>
                    <p className="details-footer">Contact Us</p>
                    <p className="details-footer">Privacy Policy</p>
                    <p className="details-footer">Terms & Conditions</p>
                    </div>
                </div>
                <div className="my-account">
                <h4 className="heading">My Account</h4>
                    <div className="user-options flex-box flex-column">
                    <p className="details-footer">Sign In</p>
                    <p className="details-footer">View Cart</p>
                    <p className="details-footer">Track My Order</p>
                    <p className="details-footer">Help</p>
                    </div>
                </div>
            </div>
            <div className="install-app">
                <h4 className="heading">Secured Payement Gateways</h4>
                    <img src={pay} alt="GateWays"  className='lazy-img'/>
            </div>
        </div>
        <h4 className='cp'>&copy; Sant Ram Puni Chand Merchant || All Rights Reserved:2024</h4>

        </ContentWrapper>
    </div>
  )
}