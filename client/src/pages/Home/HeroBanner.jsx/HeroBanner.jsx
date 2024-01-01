import React ,{useState} from 'react'
import './style.scss'
import bg from '../../../assets/herobanner2.jpeg'
import Img from '../../../components/lazyloading/Img'
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;

const HeroBanner = () => {
  const [searchText,setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearchInput = (e) =>{
    setSearchText(e.target.value) ; 
  }

  const handleSearch =(e)=>{
    e.preventDefault();
    if(searchText){
        navigate(`/shop/${searchText}`) ;
        setSearchText('');
    }else{
        message.open({
             type : 'warning' ,
             content : "PLease enter a product name to search"
        });
    }
  }

  return (
    <div id="hero-banner">
        <div className="hero-banner">
            <div className="background">
                <Img src={bg}></Img>
            </div>
            <div className="text-section">
                <h1>Order Your Daily Grocery</h1>
                <h3>#free-delievery</h3>
                <form className="search-section">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    <input onChange={handleSearchInput}  value={searchText} type="text" name="search" id="search" placeholder='What do you want to buy today...'/>
                    <input type="submit" value="Search" class='search-btn' onClick={handleSearch}/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
