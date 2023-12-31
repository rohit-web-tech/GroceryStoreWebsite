import React from 'react'
import Img from '../../../components/lazyloading/Img';
import './style.scss'

const FeatureCard = (props) => {
  return (
    <div id="feature-card">
      <div className="icon">
        <Img src={props.image}/>
      </div>
      <div className="text-section">
        <p className="heading">{props.heading}</p>
        <p className="subtitle">{props.subtitle}</p>
      </div>
    </div>
  )
}

export default FeatureCard ;
