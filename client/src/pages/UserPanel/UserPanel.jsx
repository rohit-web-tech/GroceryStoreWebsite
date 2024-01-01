import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import bg from "../../assets/user.jpg";
import Img from "../../components/lazyloading/Img";
import img from "../../assets/herobanner2.jpeg";
import { message } from "antd";
import { fetchPostDataFromApi } from "../../utiles/api";
import EmptyCart from "./EmptyCart/EmptyCart";
import { useDispatch } from "react-redux";
import { setUserLoggedIn } from "../../slice/authenticationSlice";
import Spinner from "../../components/spinner/Spinner";

const UserPanel = () => {
  let loggedInUser = JSON.parse(localStorage.getItem("srpcuser"));
  loggedInUser = {
    ...loggedInUser,
    userAddress: loggedInUser?.userAddress || "",
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const [userDetails, setUserDetails] = useState(loggedInUser);
  return (
    <div id={loading && "loading"}>
      {loading ? (
        <Spinner />
      ) : (
        <ContentWrapper>
          <div id="user-panel">
            <div className="user-icon">
              <Img src={bg} />
            </div>
            <h1>Hi, {loggedInUser?.userName} !</h1>
            <Tabs defaultActiveKey="1">
              <TabPane tab="My Profile" key="1">
                <UserProfile
                  userDetails={userDetails}
                  setUserDetails={setUserDetails}
                />
              </TabPane>
              <TabPane tab="My Orders" key="2">
                <MyOrders />
              </TabPane>
            </Tabs>
          </div>
        </ContentWrapper>
      )}
    </div>
  );
};

export function UserProfile({ userDetails, setUserDetails }) {
  const [editProfile, setEditProfile] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem("srpcuser");
    messageApi.open({
      type: "success",
      content: "You have logged out successfully",
    });
    setTimeout(() => {
      dispatch(setUserLoggedIn(false));
    }, 1000);
  };

  const handleUserInput = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setEditProfile(true);
    setUserDetails(loggedInUser);
    messageApi.open({
      type: "err",
      content: "Your edit request has been cancelled.",
    });
  };

  const handleSaveChanges = () => {
    if (
      userDetails.userName &&
      userDetails.userContact &&
      userDetails.userAddress &&
      userDetails.userEmail
    ) {
      fetchPostDataFromApi("/updateUserProfile", { userDetails })
        .then(async (res) => {
          if ((res.message = "success")) {
            console.log(res.user);
            await localStorage.setItem("srpcuser", JSON.stringify(res.user));
            setUserDetails(res.user);
            setEditProfile(true);
            messageApi.open({
              type: "success",
              content: "Your details saved successfully.",
            });
          } else {
            messageApi.open({
              type: "warning",
              content: "Something went wrong please try again later.",
            });
          }
        })
        .catch((err) => {
          messageApi.open({
            type: "warning",
            content: "Something went wrong please try again later.",
          });
        });
    } else {
      messageApi.open({
        type: "warning",
        content: "All feilds are required!!",
      });
    }
  };

  const handleEmailChange = () => {
    messageApi.open({
      type: "warning",
      content: "Sorry Email Can't be changed!!",
    });
  };
  return (
    <div id="user-profile">
      {contextHolder}
      <form>
        <div className="row">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="userName"
            id="username"
            value={userDetails?.userName}
            disabled={editProfile}
            onChange={handleUserInput}
          />
        </div>
        <div className="row">
          <label htmlFor="name">Number : </label>
          <input
            type="text"
            name="userContact"
            id="username"
            value={userDetails?.userContact}
            disabled={editProfile}
            onChange={handleUserInput}
          />
        </div>
        <div className="row">
          <label htmlFor="name">Email Id : </label>
          <input
            type="text"
            name="userEmail"
            id="username"
            value={userDetails?.userEmail}
            disabled={editProfile}
            onClick={handleEmailChange}
            onInput={handleEmailChange}
          />
        </div>
        <div className="row">
          <label htmlFor="name">Address : </label>
          <input
            type="text"
            name="userAddress"
            id="username"
            value={userDetails?.userAddress}
            disabled={editProfile}
            onChange={handleUserInput}
          />
        </div>
      </form>
      <div className="btns">
        {editProfile ? (
          <>
            <button className="log-out-btn btn" onClick={handleLogOut}>
              <i class="fa-solid fa-right-from-bracket"></i> Log Out
            </button>
            <button
              className="edit-btn btn"
              onClick={() => {
                setEditProfile(false);
              }}
            >
              <i class="fa-solid fa-pen-to-square"></i> Edit Profile
            </button>
          </>
        ) : (
          <>
            <button className="log-out-btn btn" onClick={handleCancel}>
              <i class="fa-solid fa-close"></i> Cancel
            </button>
            <button className="save-profile btn" onClick={handleSaveChanges}>
              <i class="fa-regular fa-floppy-disk"></i> Save Changes
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export function MyOrders() {
  const userId = JSON.parse(localStorage.getItem("srpcuser"))?._id;
  const [orderItems, setOrderItems] = useState([]);
  const [loading,setLoading] = useState(true) ;

  useEffect(() => {
    setLoading(true);
    fetchPostDataFromApi("/getOrders", { userId })
      .then((res) => {
        setLoading(false); 
        setOrderItems(res.orders)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="cart-table" className="flex-box justify-center align-center">
      {orderItems?.length > 0 ? (
        <div class="cart-table">
          <table className="flex-box justify-center flex-column">
            <tr className="table-row table-head-row flex-box align-center">
              <th className="image-item-column flex-box justify-center">
                IMAGE
              </th>
              <th className="name-item-column">PRODUCT</th>
              <th className="subtotal-item-column">Quantity</th>
              <th className="subtotal-item-column">PAYMENT</th>
              <th className="subtotal-item-column">STATUS</th>
              <th className="subtotal-item-column">PLACED ON</th>
            </tr>
            {orderItems?.map((orderItem) => {
              return (
                <tr className="table-row flex-box align-center">
                  <td className="image-item-column flex-box justify-center">
                    <div class="product-image">
                      <Img
                        src={orderItem?.productImg}
                        alt=""
                        className="lazy-img"
                      />
                    </div>
                  </td>
                  <td className="name-item-column">
                    <div class="product-name">
                      <p>{orderItem?.productName}</p>
                    </div>
                  </td>
                  <td className="subtotal-item-column">
                    <div class="product-subtotal">
                      <p>
                        {orderItem?.productQuantity +
                          " " +
                          orderItem?.productUnit}
                      </p>
                    </div>
                  </td>
                  <td className="subtotal-item-column">
                    <div class="product-subtotal">
                      <p>{orderItem?.paymentStatus}</p>
                    </div>
                  </td>
                  <td className="subtotal-item-column">
                    <div class="product-subtotal">
                      <p>{orderItem?.status}</p>
                    </div>
                  </td>
                  <td className="subtotal-item-column">
                    <div class="product-subtotal">
                      <p>{orderItem?.createdAt.slice(0, 10)}</p>
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default UserPanel;
