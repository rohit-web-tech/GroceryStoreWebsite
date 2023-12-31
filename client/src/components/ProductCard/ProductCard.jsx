import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss"
import Img from "../lazyloading/Img";
import { fetchPostDataFromApi } from "../../utiles/api";
import {message} from 'antd' ;

const ProductCard = ({product,setCartItems,cartItems}) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [alreadyAdded,setAlreadyAdded] = useState(false) ; 
    const [loading,setLoading] = useState(false) ;
    const loggedInUser = JSON.parse(localStorage.getItem('srpcuser'));
    function cartCheck(){
            cartItems?.forEach(cartItem=>{
                   if(cartItem?.productId === product?._id)
                     setAlreadyAdded(true); 
            })
    };
    useEffect(()=>{
        cartCheck();
    },[product,cartItems]) ;

    const navigate = useNavigate();

    let handleAddToCart = (e) =>{
        if(loggedInUser){
        if(!alreadyAdded){
            setLoading(true) ;
            fetchPostDataFromApi('/addToCart',{productId:product?._id,userId:loggedInUser._id})
            .then(res=>{
                setLoading(false) ;
                console.log(res);
                if(res.message==="success"){
                    setLoading(false) ;
                    setAlreadyAdded(true);
                    messageApi.open({
                        type: 'success',
                        content: 'Product Added to cart Successfully.',
                    });
                    setCartItems(res.cartItems);
                }else{
                    messageApi.open({
                        type: 'warning',
                        content: res.message,
                    }); 
                }
              })
              .catch(err=>{
                messageApi.open({
                    type: 'warning',
                    content: err ,
                });
              })
        }else{
            messageApi.open({
                type: 'warning',
                content: 'Product Already Added in cart!!',
            });
        }
        }else{
          navigate('/signup');
        }
    }

    return (
        <div className="movieCard">
            {contextHolder}
            <div className="posterBlock">
                <Img className="posterImg" src={product?.productImg} />
            </div>
            <div className="bottom">
                <div className="textBlock">
                    <span className="title">
                        {product?.productName}
                    </span>
                    <span className="subtitle">
                        {product?.productCategory}
                    </span>
                </div>
                <div className="rating">
                    <div className="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="price">
                        {product?.productPrice}Rs/{product?.productUnit}
                    </div>
                </div>
            </div>
            <div className="btns">
              <button className={`add-to-cart btn  ${alreadyAdded?"disabled":""} ${loading?"laoding":""}`} onClick={handleAddToCart}>{alreadyAdded?(<><i class="fa-solid fa-check"></i> Added In Cart</>):loading?(<><i class="fa-solid fa-cart-shopping"></i>Adding To Cart...</>):(<><i class="fa-solid fa-cart-shopping"></i>Add To Cart</>)}</button>     
            </div>
        </div>
    );
};

export default ProductCard;
