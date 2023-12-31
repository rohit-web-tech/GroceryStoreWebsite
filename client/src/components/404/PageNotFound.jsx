import React from 'react'
import './style.scss' ;
import Img from '../lazyloading/Img';
import pageNotFound from '../../assets/404.jpg'
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate() ;
  return (
    <div id="page-not-found">
      <div className="page-not-found">
        <Img src={pageNotFound} />
        <div className="text">
            <h3>PAGE NOT FOUND!!</h3>
        </div>
            <button onClick={()=>{navigate('/')}}><i class="fa-solid fa-arrow-left"></i>Go Back To Home</button>
      </div>
    </div>
  )
}

export default PageNotFound
