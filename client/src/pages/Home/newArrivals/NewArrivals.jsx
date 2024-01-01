import React, { useRef } from 'react';
import './style.scss';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Header from '../../../components/header/Header';
import Carousel from '../../../components/carousel/Carousel' ;

const NewArrivals = ({data}) => {
    return (
        <div id="new-arrivals">
            <ContentWrapper>
                <div className="new-arrivals">
                    <Header title="New Arrivals" />
                    <Carousel data={data} />
                </div>
            </ContentWrapper>
        </div>
    )
}

export default NewArrivals;