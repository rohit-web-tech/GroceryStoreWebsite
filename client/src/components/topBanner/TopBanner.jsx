import React from 'react'
import './style.css'
import Img from '../lazyloading/Img'

export default function TopBanner(props) {
  return (
    <div className={`top-banner flex-box justify-center align-center`}>
          <div className="background">
            <Img src={props.bg}/>
          </div>
        <div className="top-banner-content flex-box justify-center align-center flex-column">
            <h2>{props.title}</h2>
            <h5>{props.subtitle}</h5>
        </div>
    </div>
  )
}