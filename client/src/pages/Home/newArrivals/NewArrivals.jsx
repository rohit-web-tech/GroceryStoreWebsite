import React, { useRef } from 'react';
import './style.scss';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Header from '../../../components/header/Header';
import Carousel from '../../../components/carousel/Carousel' ;

const NewArrivals = ({data,setCartItems,cartItems}) => {
    return (
        <div id="new-arrivals">
            <ContentWrapper>
                <div className="new-arrivals">
                    <Header title="New Arrivals" />
                    <Carousel data={data} setCartItems={setCartItems} cartItems={cartItems}/>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default NewArrivals;