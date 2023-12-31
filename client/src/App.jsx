import { useEffect, useState } from 'react';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsLetters from './components/carousel/newsletter/NewsLetters' ;
import Footer from './components/footer/Footer'
import PageNotFound from './components/404/PageNotFound';
import AboutUs from './pages/About/AboutUs';
import ContactPage from './pages/Contact/Contact'
import CartPage from './pages/cart/CartPage';
import ShopPage from './pages/Shop/ShopPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import UserPanel from './pages/UserPanel/UserPanel';
import VerifyPage from './components/verify/VerifyPage';
import useFetch from './hooks/useFetch';
import { fetchPostDataFromApi } from './utiles/api';

function App() {
  const loggedInUser = JSON.parse(localStorage.getItem('srpcuser'));
  const [loggedIn , setLoggedIn] = useState(loggedInUser?true:false);
  const [cartItems,setCartItems] = useState([]);
  const [orderPlaced,setOrderPlaced] = useState(false);
  const [quantity,setQuantity] = useState();

  const handleQuantityChange =(e,index,cartItem)=>{
      setQuantity(e.target.value);
      let temp = cartItems ;
      temp[index]={...cartItem,"productQauntity":e.target.value};
      setCartItems(temp);
      fetchPostDataFromApi('/updateCart',{cartItem,quantity:e.target.value})
      .then(res=>console.log(res))
      .catch(err=>console.log(err));
  }
  
  useEffect(()=>{
    fetchPostDataFromApi('/getCartData',{userId:loggedInUser?._id})
    .then(res=>{
      setCartItems(res.cartItems);
      console.log(res)
    })
    .catch(err=>console.log(err));
  },[loggedIn]);

  return (
    <BrowserRouter>
      <NavBar cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<Home setCartItems={setCartItems} cartItems={cartItems}/>}></Route>    
        <Route path="/shop" element={<ShopPage setCartItems={setCartItems} cartItems={cartItems}/>}></Route>    
        <Route path="/about" element={<AboutUs/>}></Route>    
        <Route path="/contact" element={<ContactPage />}></Route>    
        <Route path="/cart" element={!loggedIn?<SignUp setLoggedIn={setLoggedIn}/>:<CartPage handleQuantityChange={handleQuantityChange} cartItems={cartItems} setCartItems={setCartItems} setOrderPlaced={setOrderPlaced}/>}></Route>    
        <Route path="/login" element={!loggedIn?<Login setLoggedIn={setLoggedIn}/>:<UserPanel setLoggedIn={setLoggedIn}/>}></Route>
        <Route path="/signup" element={!loggedIn?<SignUp setLoggedIn={setLoggedIn}/>:<UserPanel setLoggedIn={setLoggedIn}/>}></Route>
        <Route path="/user" element={!loggedIn?<SignUp setLoggedIn={setLoggedIn}/>:<UserPanel setLoggedIn={setLoggedIn}/>}></Route>
        <Route path="/paymentVerify" element={!orderPlaced?<PageNotFound/>:<VerifyPage/>}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>    
      </Routes>
        <NewsLetters/>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
