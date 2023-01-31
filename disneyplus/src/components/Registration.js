import React from 'react'
import {auth,provider} from "../firebase"
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
  setUserLogin,
} from "../features/user/userSlice"
import { useDispatch} from 'react-redux'
function Registration() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
  const signIn = () =>{
    auth.signInWithPopup(provider)
    .then((result)=>{
      let user = result.user;
        dispatch(setUserLogin({
          name:user.displayName,
          email:user.email,
          photo:user.photoURL
        }))
        navigate('/');
    })
   
  }  

    return (
    <Container>
        <Content>
                <img className='Logo1' src="/images/cta-logo-one.svg" />
                <Signup onClick={signIn} >LOGIN</Signup>
                <Desc>
                    Get a Premier Access to Raya and the Last Dragon for with a Disney+ Subscription. As of 03.2/22, the price and The Disney Bundle will increase by $1.
                </Desc>
                <img className='Logo2' src="images/cta-logo-two.png"/>
        </Content>
    </Container>
  )
}

export default Registration

const Container = styled.div`

    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before{
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
    }
    
    `
    const Content = styled.div`
        padding: 200px 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
    .Logo1{

        @media (max-width:1200px){
            width: 80%;
        }

        width: 50%;
    }
    .Logo2{
        width: 50%;
        padding: 0px 20px;
        @media (max-width:1200px){
            width: 80%;
        }
        @media (max-width:768px){
            width: 110%;
        }
    }
` 

  
    const Signup = styled.a`
        @media (max-width:1200px){
            width: 80%;
        }
        width: 50%;
        background-color: #0063e5;
        font-weight: bold;
        margin: 15px 0 5px 0;
        padding: 17px 2px;
        color: #f9f9f9;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
        transition: all 250ms;
        &:hover{
            background: #0483ee;
        }
    `
    const Desc = styled.p`
    @media (max-width:1200px){
            width: 80%;
        }
        width: 40%;
            font-size: 11px;
            letter-spacing: 1.5px;
            text-align: center;
            line-height: 1.5;

    `