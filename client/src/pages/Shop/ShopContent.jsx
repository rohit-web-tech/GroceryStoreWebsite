import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import ProductCard from "../../components/ProductCard/ProductCard";
import PageNotFound from "../../components/404/PageNotFound";

const sortbyData = [
    { value: "fruit", label: "Fruits" },
    { value: "vegitable", label: "Vegitables" },
    { value: "drinks", label: "Soft Drinks" },
    { value: "dairy", label: "Dairy" },
    {
        value: "grains",
        label: "Grains",
    },
    { value: "non-veg", label: "Non Veg" },
    { value: "snacks", label: "Snacks" },
];

const ShopContent = ({setCartItems,cartItems,data}) => {
    const [sortby, setSortby] = useState(null) ;
    const [dataToShow,setDataToShow] = useState(data ? data?.products : []) ;

    useEffect(()=>{
        if(data){
            setDataToShow(data.products);
        }
    },[data]);
    
    const onChange = (selectedItems, action) => {
        let filteredItems = data?.products.filter(product=>{
            return (product.productCategory === selectedItems.value) ;
        })
        setDataToShow(filteredItems) ;
    }

    const onSearch=(seachedProduct)=>{
        
    }

    return (
        <div className="explorePage">
            <ContentWrapper>
                <div className="pageHeader">
                <div className="search-section">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" name="search" id="search" placeholder='Search for any Item'/>
                    <input type="submit" value="Search" class='search-btn'/>
                </div>
                    <div className="filters">
                        <Select
                            name="filter"
                            value={sortby}
                            options={sortbyData}
                            onChange={onChange}
                            isClearable={true}
                            placeholder="Select Category"
                            className="react-select-container sortbyDD"
                            classNamePrefix="react-select"
                            />
                    </div>
                </div>
                <div className="content">
                    
                    { (dataToShow.length > 0) ?
                    (
                    dataToShow.map(product=>{
                        return (
                            <ProductCard product={product} key={product?._id} setCartItems={setCartItems} cartItems={cartItems}/>
                        )
                    })
                    ):(
                        <PageNotFound/>
                    )
                }
                </div>
            </ContentWrapper>
        </div>
    );
};

export default ShopContent;

