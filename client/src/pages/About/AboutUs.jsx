import React from 'react'
import AboutUsContent from './AboutUsContent/AboutUsContent.jsx'
import TopBanner from '../../components/topBanner/TopBanner.jsx'
import Features from '../Home/features/Features.jsx'
import bg from '../../assets/about-us-banner.jpg'
const AboutUs = () => {
    return (
        <>
       <TopBanner bg={bg} title="#know_us" subtitle="Know who we are and why choose us?"/>
      <AboutUsContent/>
      <Features title="Why Choose Us?"/>
    </>
  )
}

export default AboutUs
