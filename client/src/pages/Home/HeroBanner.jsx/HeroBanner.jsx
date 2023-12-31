import React from 'react'
import './style.scss'
import bg from '../../../assets/herobanner2.jpeg'
import Img from '../../../components/lazyloading/Img'

const HeroBanner = () => {
  return (
    <div id="hero-banner">
        <div className="hero-banner">
            <div className="background">
                <Img src={bg}></Img>
            </div>
            <div className="text-section">
                <h1>Order Your Daily Grocery</h1>
                <h3>#free-delievery</h3>
                <div className="search-section">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" name="search" id="search" placeholder='What do you want to buy today...'/>
                    <input type="submit" value="Search" class='search-btn'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
