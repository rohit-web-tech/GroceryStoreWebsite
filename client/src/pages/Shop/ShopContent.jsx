import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import ProductCard from "../../components/ProductCard/ProductCard";
import PageNotFound from "../../components/404/PageNotFound";
import {message} from 'antd' ;

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

const ShopContent = ({data,searchProduct}) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [sortby, setSortby] = useState(null) ;
    const [dataToShow,setDataToShow] = useState(data ? data?.products : []) ;
    const [searchText,setSearchText] = useState('');

    useEffect(()=>{
        if(data){
            if(searchProduct==='all'){
                setDataToShow(data.products);
            }else{
                const temp = data?.products?.filter(product=>{
                    return ((product?.productName).toLowerCase().includes(searchProduct.toLowerCase()) || (product?.productCategory).toLowerCase().includes(searchProduct.toLowerCase()) );
                })
                setDataToShow(temp)
            }
        }
    },[data]);
    
    const onChange = (selectedItems, action) => {
        let filteredItems = data?.products.filter(product=>{
            return (product.productCategory === selectedItems.value) ;
        })
        setDataToShow(filteredItems) ;
    }

    const onChangeSearch =(e)=>{
        setSearchText(e.target.value);
    }

    const onSearch=(e)=>{
        e.preventDefault() ;
        if(searchText){
            const temp = data?.products?.filter(product=>{
                return ((product?.productName).toLowerCase().includes(searchText.toLowerCase()) || (product?.productCategory).toLowerCase().includes(searchText.toLowerCase()) );
            })
            setDataToShow(temp)
            setSearchText('');
        }else{
            messageApi.open({
                type:'warning' ,
                content : 'Please enter a product name to search !!'
            })
        }
    }

    return (
        <div className="explorePage">
            <ContentWrapper>
                {contextHolder}
                <div className="pageHeader">
                <form className="search-section">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" name="search" id="search" placeholder='Search for any Item' value={searchText} onChange={onChangeSearch}/>
                    <input type="submit" value="Search" class='search-btn' onClick={onSearch}/>
                </form>
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
                    
                    { (dataToShow?.length > 0) ?
                    (
                    dataToShow?.map(product=>{
                        return (
                            <ProductCard product={product} key={product?._id}/>
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

