import React from 'react' ;
import './style.css'
import ContentWrapper from '../../contentWrapper/ContentWrapper';

export default function () {
    return (
        <div id="news-container" className='flex-box justify-center align-center'>
        <ContentWrapper>
      <div className="news-container flex-box align-center">
        <div className="news-text flex-box justify-center flex-column">
            <h3>Sign Up For Newsletters</h3>
            <h6>Get E-mail udates about our latest shop and <span className="golden">special offers</span>.</h6>
        </div>
        <form action="#" id="email-get">
            <input type="email" placeholder="Your email address" className='email-input' />
            <input type="submit" value="Sign Up" className='email-signup-btn' />
        </form>
      </div>
        </ContentWrapper>
    </div>
  )
}