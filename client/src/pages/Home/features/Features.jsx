import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import './style.scss'
import FeatureCard from './FeatureCard' ;
import delieveryImg from '../../../assets/delevery.webp' ;
import freshBg from '../../../assets/fresh.png' ;
import easy from '../../../assets/easy.png' ;
import Header from '../../../components/header/Header';


const Features = (props) => {
    return (
        <div id="features">
            <ContentWrapper>
                <div className="features">
                    <Header title={props.title}/>
                    <div className="feature-cards">
                    <FeatureCard image={delieveryImg} heading="Free Delievery" subtitle="We offer free home delievery within 5KM from our shop location."/>
                    <FeatureCard image={freshBg} heading="Fresh Products" subtitle="We have fully organic and fresh products in your budget price."/>
                    <FeatureCard image={easy} heading="Easy Payments" subtitle="We have all the payment methods to accept the payement."/>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Features
