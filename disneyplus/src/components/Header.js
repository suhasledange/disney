import React, { useState ,useEffect} from 'react'
import {auth,provider} from "../firebase"
import { Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
  selectUserName,
  selectUserPhoto,
  selectUserEmail,
  setUserLogin,
  setSignOut

} from "../features/user/userSlice"
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '@mui/icons-material'

function Header() {


  const [BurgerStatus, setBurgerStatus] = useState(false);

  const toggleClass = () =>{
      if(BurgerStatus) 
        setBurgerStatus(false);
      else
        setBurgerStatus(true);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const userEmail = useSelector(selectUserEmail);
  

  useEffect(()=>{
    auth.onAuthStateChanged(async (user) =>{
      if(user){
        dispatch(setUserLogin({
          name:user.displayName,
          email:user.email,
          photo:user.photoURL
        }))
        navigate("/");
      }
    })
  },[])


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

  const signOut = () =>{
    auth.signOut()
    .then(()=>{
      dispatch(setSignOut());
      navigate('/Registration');
      setBurgerStatus(false);
    })
  }
  return (
    <Nav>
      <Leftbar> 
        <a href='/'>
        <Logo src="/images/logo1.svg"/>
        </a>
      </Leftbar>

      {
        !userName ? (
        <Login onClick={signIn}>LOGIN</Login> ):

        <>
        <NavMenu>
              <a>
                {/* <img src="/images/home-icon.svg"></img> */}
                <span>TV</span>
                <div className="DropMenu">
                    <a href="#">Mood Mix</a>
                    <a href="#">Hotstar Specials</a>
                    <a href="#">Quix</a>
                    <a href="#">Star Jalsha</a>
                    <a href="#">StarPlus</a>
                    <a href="#">Star Vijay</a>
                    <a href="#">Star Bharat</a>
                    <a href="#">Asianet</a>
                    <a href="#">more...</a>
                </div>
              </a>
              <a>
                {/* <img src="/images/search-icon.svg"></img> */}
                <span>Movies</span>
                <div className="DropMenu">
                    <a href="#">Odia</a>
                    <a href="#">Hindi</a>
                    <a href="#">Bengali</a>
                    <a href="#">Telugu</a>
                    <a href="#">Malayalam</a>
                    <a href="#">Tamil</a>
                    <a href="#">Marathi</a>
                    <a href="#">English</a>
                    <a href="#">Kannada</a>
                    <a href="#">Korean</a>
                    <a href="#">Japanese</a>

                </div>
              </a>
              <a>
                {/* <img src="/images/watchlist-icon.svg"></img> */}
                <span>Sport</span>
                <div className="DropMenu">
                    <a href="#">Cricket</a>
                    <a href="#">Football</a>
                    <a href="#">Hockey</a>
                    <a href="#">Kabaddi</a>
                    <a href="#">Martial Arts</a>
                    <a href="#">American Football</a>
                    <a href="#">Tennis</a>
                    <a href="#">Khelo India</a>
                    <a href="#">Formula E</a>
                    <a href="#">Athletics</a>
                </div>
              </a>
              <a>
                {/* <img src="/images/original-icon.svg"></img> */}
                <span>Disney+</span>
              </a>
              <a>
                {/* <img src="/images/movie-icon.svg"></img> */}
                <span>KiDS</span>
              </a>
        </NavMenu>

        <Rightbar>
          <div className='SRH'>
          <input type="text" placeholder="Search"/>
          </div>
            <a href='#'>SUBSCRIBE</a>
          <UserImg onClick={toggleClass} src={userPhoto} />
          <UserImgBlock show={BurgerStatus}> 
            <img src={userPhoto} />
              <h2>{userName}</h2>
              <p>{userEmail}</p>
              <a>Manage Your Account</a>
              <a>
              <Logout onClick={signOut}/>
              </a>
          </UserImgBlock>
        </Rightbar>
        </>
    }
       
    </Nav>
  )
}

export default Header

const Login = styled.div`

  cursor: pointer;
  text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0.6rem 1.1rem;
    border-radius: 8px;
    transition: 250ms;

    &:hover{
      color: rgba(255, 255, 255, 1);

    }

`


const Nav = styled.nav` 

  height: 70px;
  width: 100%;
  background:#0c111b;
  display: flex;
  align-items: center;
  padding:40px;

  @media (max-width:768px){
        padding: 40px 20px;
  }
  justify-content: space-between;
  /* overflow-x: hidden; */
  position: fixed;
  z-index: 10;

  .DropMenu{
    position: absolute;
    top: 0;
    z-index: 1;
    margin-left: -1rem;
    margin-top: 2.8rem;
    width: 150px;
    background: #121926;
    border-radius: 4px;
    transform-origin:left top;
    a{
    text-decoration: none;
    color:rgba(255, 255, 255, 0.6);
    padding:14px 16px;
    font-size: 15px;
    &:hover{
    color:rgba(255, 255, 255, 0.9);
    background: #090b13;

    }
  }
  transform-origin:top;
  opacity: 0;
  transform:scaleY(0);
  transition: 250ms;
  }

`

const Logo = styled.img`
  height: 43px;
  margin-top: -12px;
  cursor: pointer;

`


const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 15px;
  align-items: center;
  position: relative;

  @media (max-width:1200px){
      display: none;
  }

  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img{
      height: 20px;

    }
    span{
      font-size: 16px;
      letter-spacing: 2.5px;
      position: relative;
      color: rgba(255, 255, 255, 0.6);
      &:after{
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
      
    }
    
    &:nth-child(3){
      .DropMenu{
        width: 180px;
      }
    }

    &:nth-child(5){

     span{
        color: yellow;
        font-weight: 900;
        font-size: 18px;
     }
    }
    &:hover{
      span{
            color:rgba(255, 255, 255, 0.9);
      }

      span:after{
        transform: scaleX(1); 
        opacity: 1;
      }
    
    .DropMenu{
        transform: scaleY(1);
        opacity: 1;
    }
      
  }

  }

`

const UserImg = styled.img`
    width : 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 250ms ease;
  
`

const UserImgBlock = styled.div` 
  z-index: -1;
  position: absolute;
  background:  #121926;
  width: 20rem;
  height: 24rem;
  bottom: 0;
  top: 120%;
  right: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  img{
    cursor: pointer;
    width: 40%;
    border-radius: 50%;
    border: 3px solid #1f80e0;
    transition: 250ms;
    &:hover{
      border-color: #49a4ff;
    }
  }
  h2{
    width:100%;
    text-align: center;
    font-size: 20px;
    padding-top: 0.5rem;
  }
  p{
    margin-top: -0.3rem;
    border-bottom: 1px solid  rgba(255, 255, 255, 0.2);
    width:100%;
    text-align: center;
    padding-bottom: 1.4rem;

  }
  a{
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  transform-origin : bottom;
  /* transform: translateY(-100%); */
  transform: ${props => props.show ? 'translateX(0%)' : 'translateX(150%)'};
    transition: transform 0.3s ease-in-out;
`


const Leftbar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
 
`

const Rightbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  a{
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    transition: 250ms;

    &:hover{
      color: rgba(255, 255, 255, 1);
    }

    &:nth-child(2){
      background: #1f80e0;
      font-size: 12px;
      padding: 5px 10px;
      border-radius: 5px;
      color: white;
    }

  }

  .SRH{

  display: flex;
  align-items: center;
  position: relative;
  input{
    color: white;
    font-size: 16px;
    width: 15rem;
    background: transparent;
    border: none;
    outline: none;
    padding: 6px 0px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    transition: 250ms;
    &::placeholder{
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
    }
    &:focus{
        width: 20rem;
        border-color:#1f80e0;
    }
    
  }
  &:after{
    position: absolute;
    content: url("/images/search-icon.svg");
    width: 22px;
    opacity: 0.5;
    right: 0;
    bottom: 0;
  }
}
@media (max-width:768px){
        a{
          display: none;
        }
    @media (max-width:768px){
        .SRH{
          input{
            width: 10rem;
          }
        }
  }
}
`

  