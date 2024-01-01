import { useEffect, useState ,useLayoutEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import NewsLetters from "./components/carousel/newsletter/NewsLetters";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/404/PageNotFound";
import AboutUs from "./pages/About/AboutUs";
import ContactPage from "./pages/Contact/Contact";
import CartPage from "./pages/cart/CartPage";
import ShopPage from "./pages/Shop/ShopPage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import UserPanel from "./pages/UserPanel/UserPanel";
import VerifyPage from "./components/verify/VerifyPage";
import { fetchPostDataFromApi } from "./utiles/api";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "./slice/cartSlice";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const loggedInUser = JSON.parse(localStorage.getItem("srpcuser"));
  const dispatch = useDispatch();
  const { userLoggedIn } = useSelector((state) => state.authentication);
  const { orderPlaced } = useSelector((state) => state.cart);

  useEffect(() => {
    console.log("changed");
    fetchPostDataFromApi("/getCartData", { userId: loggedInUser?._id })
      .then((res) => {
        console.log(res);
        dispatch(updateCart(res.cartItems));
      })
      .catch((err) => console.log(err));
  }, [userLoggedIn]);

  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:product" element={<ShopPage />} />
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route
            path="/cart"
            element={!userLoggedIn ? <SignUp /> : <CartPage />}
          />
          <Route
            path="/login"
            element={!userLoggedIn ? <Login /> : <UserPanel />}
          />
          <Route
            path="/signup"
            element={!userLoggedIn ? <SignUp /> : <UserPanel />}
          />
          <Route
            path="/user"
            element={!userLoggedIn ? <SignUp /> : <UserPanel />}
          />
          <Route
            path="/paymentVerify"
            element={!orderPlaced ? <PageNotFound /> : <VerifyPage />}
          />
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      <NewsLetters />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
