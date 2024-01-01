import React from "react";
import HeroBanner from "./HeroBanner.jsx/HeroBanner";
import Features from "./features/Features";
import TopCategories from "./topCategories/TopCategories";
import PopularProducts from "./PopularProducts/PopularProducts";
import NewArrivals from "./newArrivals/NewArrivals";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../components/spinner/Spinner";

const Home = () => {
  const { loading, data } = useFetch("/getProductsDetail");

  return (
  <div id={loading && 'loading' }>
    {loading ? (
      <Spinner />
    ) : (
      <>
        <HeroBanner />
        <Features title="Our Features" />
        <TopCategories />
        <PopularProducts data={data?.products} />
        <NewArrivals data={data?.products} />
      </>
    )}
  </div>
  )
};

export default Home ;
