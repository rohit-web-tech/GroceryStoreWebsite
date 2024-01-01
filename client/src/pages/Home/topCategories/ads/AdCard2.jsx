import React from 'react'
import Img from '../../../../components/lazyloading/Img'

export default function AdCard2(props) {
  return (
    <div onClick={()=>{props?.handleOnClick(props?.productCategory)}} className={`ad-card2 flex-box justify-center flex-column ${props.type}`}>
      <div className="background">
        <Img src={props.bg}/>
      </div>
      <div className="text">
        <h2>{props.title}</h2>
        <h5>{props.subtitle}</h5>
      </div>
    </div>
  )
}