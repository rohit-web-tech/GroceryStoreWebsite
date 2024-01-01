import React from 'react'
import TopBanner from '../../components/topBanner/TopBanner';
import bg from '../../assets/products.jpg'
import ShopContent from './ShopContent';
import useFetch from "../../hooks/useFetch";
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';

const ShopPage = () => {
  const {data,loading} = useFetch('/getProductsDetail') ;
  const {product} = useParams() ;
  return (
    <div id={loading && 'loading'}>
      {
        loading ? (<Spinner/>) :
        (
          <>
          <TopBanner bg={bg} title="#stay_home" subtitle="Order your daily grocery from home and get free delievery."/>
          <ShopContent data={data} searchProduct={product}/>
          </>
        )
      }
    </div>
  )
}

export default ShopPage ;
    