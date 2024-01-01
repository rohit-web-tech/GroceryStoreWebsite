import React, { useEffect , useState} from "react";
import TopBanner from "../../components/topBanner/TopBanner";
import CartItemsTable from "./CartItems/CartItem";
import CartCheckOut from "./CheckOut/CartCheckOut";
import "./style.css";
import EmptyCart from "./EmptyCart/EmptyCart";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import bg from "../../assets/cart-full.jpg";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../../slice/cartSlice";
import Spinner from "../../components/spinner/Spinner";

export default function CartPage() {
  const [modal, contextHolder] = Modal.useModal();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div id={loading && "loading"}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <TopBanner
            bg={bg}
            title="#cart"
            subtitle="Add your coupon code and SAVE upto 70%!"
          />
          <ContentWrapper>
            {cartItems?.length > 0 ? (
              <>
                <CartItemsTable />
                <CartCheckOut modal={modal} />
              </>
            ) : (
              <EmptyCart />
            )}
          </ContentWrapper>
        </>
      )}
      {contextHolder}
    </div>
  );
}
