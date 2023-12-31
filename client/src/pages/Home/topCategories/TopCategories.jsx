import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import './style.scss'
import Ads from './ads/Ads';
import Header from '../../../components/header/Header';

const TopCategories = () => {
  return (
    <div id="top-categories">
      <ContentWrapper>
                <div className="top-categories">
                      <Header title="Top Categories"/>
                      <Ads/>
                </div>
     </ContentWrapper>
    </div>
  )
}

export default TopCategories ;
