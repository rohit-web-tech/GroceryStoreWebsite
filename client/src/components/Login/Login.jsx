import React, { useEffect, useState } from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import Img from '../lazyloading/Img' ;
import bg from '../../assets/login.jpg' ;
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { fetchPostDataFromApi } from '../../utiles/api';
import { message} from 'antd';
import { setUserLoggedIn } from '../../slice/authenticationSlice';
import {useDispatch} from 'react-redux' ;

const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData,setUserData] = useState({
        "email" : '' ,
        "password" : ''
    });
    let handleOnChange = (e) =>{
        setUserData({...userData,[e.target.name]:e.target.value});
        console.log(userData)
    } 
    let handleLoginUser = (e) =>{
        e.preventDefault();
        if(userData.email&&userData.password){
            fetchPostDataFromApi('/loginUser',userData)
            .then((res) => {
                console.log(res)
                if(res.message==="success"){
                    messageApi.open({
                        type: 'success',
                        content: 'You have logged in successfully',
                    });
                    setUserData({
                        "email" : '' ,
                        "password" : ''
                    });
                    localStorage.setItem('srpcuser',JSON.stringify(res.user[0]));
                    setTimeout(()=>{
                        dispatch(setUserLoggedIn(true));
                        navigate('/user') ;
                    },1000)
                }else{
                    messageApi.open({
                        type: 'warning',
                        content: res.message,
                    });
                }
            })
            .catch((err) => {
                messageApi.open({
                    type: 'success',
                    content: err ,
                  });
            });
        }else{
            messageApi.open({
                type: 'warning',
                content: 'All Feilds Are Required!!',
              });
        }
    }
  return (
      <ContentWrapper>
        {contextHolder}
        <div className="login">
        <div className="form-section">
            <h1>Welcome Back !</h1>
            <form>
                <input type="email" name="email" id="email" className='input-box' placeholder='Enter Your Email' value={userData.email} onChange={handleOnChange}/>
                <input type="password" name="password" id="password" className='input-box' placeholder='Enter Your Password' value={userData.password} onChange={handleOnChange}/>
                <input type="submit" value="Login" id="login-btn" onClick={handleLoginUser}/>
            </form>
        </div>
        <div className="poster-section">
            <div className="background">
                <Img src={bg}/>
            </div>
            <div className="text">
                Don't Have an Account?
            </div>
            <button onClick={()=>{navigate('/signup')}}>Sign Up Now</button>
        </div>
        </div>
      </ContentWrapper>
  )
}

export default Login
