import React , {useState}from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import Img from '../lazyloading/Img' ;
import bg from '../../assets/signUp.jpg' ;
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { fetchPostDataFromApi } from '../../utiles/api';

const SignUp = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const [userData,setUserData] = useState({
        "email" : '' ,
        "password" : '',
        "contact" : '' ,
        "name" : ''
    });
    let handleOnChange = (e) =>{
        setUserData({...userData,[e.target.name]:e.target.value});
        console.log(userData)
    } 
    let handleRegisterUser = (e) =>{
        e.preventDefault();
        if(userData.email&&userData.password&&userData.name&&userData.contact){
            fetchPostDataFromApi('/registerUser',userData)
            .then((res) => {
                console.log(res)
                if(res.message==="success"){
                    console.log(res)
                    messageApi.open({
                        type: 'success',
                        content: 'You have signed up successfully',
                      });
                    setUserData({
                        "email" : '' ,
                        "password" : '',
                        "contact" : '' ,
                        "name" : ''
                    });
                    localStorage.setItem('srpcuser',JSON.stringify(res.data));
                    props.setLoggedIn(true);
                    navigate('/user') ;
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
        <div className="sign-up">
        <div className="form-section">
            <h1>Welcome !</h1>
            <form>
                <input type="text" name="name" id="username" className='input-box' placeholder='Enter Your Name' onChange={handleOnChange} value={userData.name}/>
                <input type="number" name="contact" id="cnumber" className='input-box' placeholder='Enter Your Contact Number' onChange={handleOnChange} value={userData.contact}/>
                <input type="email" name="email" id="email" className='input-box' placeholder='Enter Your Email' onChange={handleOnChange} value={userData.email}/>
                <input type="password" name="password" id="password" className='input-box' placeholder='Enter Your Password' onChange={handleOnChange} value={userData.password}/>
                <input type="submit" value="Sign In" id="sign-up-btn" onClick={handleRegisterUser}/>
            </form>
        </div>
        <div className="poster-section">
            <div className="background">
                <Img src={bg}/>
            </div>
            <div className="text">
                Already Have an Account?
            </div>
            <button onClick={()=>{navigate('/login')}}>Login Now</button>
        </div>
        </div>
      </ContentWrapper>
  )
}

export default SignUp
