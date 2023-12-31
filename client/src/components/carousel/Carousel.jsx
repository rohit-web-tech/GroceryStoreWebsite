import React, { useRef } from 'react'
import "./style.scss"
import ContentWrapper from '../contentWrapper/ContentWrapper'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Card from './Card';

const Carousel = ({data,setCartItems,cartItems}) => {
  const carouselContainer = useRef();
  const loading = false;
  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="carousel">
      {!loading &&
        <>
          <BsFillArrowLeftCircleFill
            className="carouselLeftNav arrow"
            onClick={() => navigation("left")}
          />
          <BsFillArrowRightCircleFill
            className="carouselRighttNav arrow"
            onClick={() => navigation("right")}
          />
        </>
      }
      {!loading ?
        (<div className="carouselItems" ref={carouselContainer} >
          {data?.map(product=>{
            return (
              <Card product={product} key={product._id} productId={product._id} setCartItems={setCartItems} cartItems={cartItems}/>
            )
          })}
        </div>) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )
      }
    </div>
  )
}

export default Carousel;
