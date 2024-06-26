import React, { useRef } from 'react';
import './style.scss';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Header from '../../../components/header/Header';
import Carousel from '../../../components/carousel/Carousel' ;

const PopularProducts = ({data}) => {
    return (
        <div id="popular-products">
            <ContentWrapper>
                <div className="popular-products">
                    <Header title="Popular Products" />
                    <Carousel data={data}/>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default PopularProducts;
