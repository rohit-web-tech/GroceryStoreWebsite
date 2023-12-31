import React from 'react'
import './style.css';
import image from '../../../assets/about-us.jpg';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Img from '../../../components/lazyloading/Img';
export default function About() {
    return (
        <div id="element-card" className="flex-box justify-center aling-center">
            <ContentWrapper>
            <div className='element-card'>
                <div className="image flex-box justify-center align-center">
                    <Img src={image}/>
                </div>
                <div className="element-content flex-box justify-center flex-column">
                    <h1>Who We Are ?</h1>
                    <p className="about-us">Established in 1925, Sant Ram Puni Chand Merchant has been a cherished local grocery store serving our community for nearly a century. What started as a humble endeavor has grown into a cornerstone of quality, reliability, and personalized service.

We pride ourselves on offering a diverse range of top-quality products, from fresh produce to household essentials, carefully sourced to meet your needs. Our team is dedicated to ensuring your shopping experience is nothing short of exceptional, providing friendly assistance and expert advice.

Beyond being a place to shop, we consider ourselves a part of the community. We've supported local initiatives, fostered connections, and been there for our neighbors when it mattered most.

At Sant Ram Puni Chand Merchant, we're committed to upholding our legacy while embracing the future. Thank you for being part of our story. We're here to serve you, making your grocery shopping convenient, delightful, and personalized.</p>
                </div>
            </div>
            </ContentWrapper>
        </div>
    )
}