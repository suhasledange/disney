import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector} from 'react-redux'

function Header() {

    const [BurgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);


  return (
    <Container>
        <Logo>
            <img src="https://suhasledange.github.io/tesla/images/logo.svg" alt=""></img>
        </Logo>

        <Menu>
            {cars && cars.map((car,index)=>(
                     <a id = "icn" key={index} href="#">{car}</a>
            ))}
             {/* <a href="#">Model-S</a>
             <a href="#">Model-3</a>
             <a href="#">Model-X</a>
             <a href="#">Model-Y</a> */}
             {/* <a href="#">Solar Roof</a>
             <a href="#">Solar Panel</a> */}
        </Menu>

        <RightMenu>
            <RightM>
            <a id ="icn" href="#">Shop</a>
            <a id = "icn" href="#">Account</a>
            </RightM>
            <CustomMenu id="icn" onClick={()=> setBurgerStatus(true)}>Menu</CustomMenu>
        </RightMenu>
            
        <BurgerNav show={BurgerStatus}>
             <CloseWrapper>
                <CustomClose onClick={()=> setBurgerStatus(false)}/>
             </CloseWrapper>
            <li> <a href="#">Existing Inventory</a> <div></div> </li>
            <li> <a href="#">Used Inventory</a> <div></div> </li>
            <li> <a href="#">Trade-in</a> <div></div> </li>
            <li> <a href="#">Demo Drive</a><div></div>  </li>
            <li> <a href="#">Insurance</a><div></div>  </li>
            <li> <a href="#">CyberTruck</a> <div></div>  </li>
            <li> <a href="#">Roadster</a><div></div>  </li>
            <li> <a href="#">Semi</a> <div></div>  </li>
            <li> <a href="#">Charging</a> <div></div>  </li>
            <li> <a href="#">Powerwall</a> <div></div>  </li>
            <li> <a href="#">Commercial Energy</a> <div></div>  </li>
            <li> <a href="#">Utilities</a><div></div>   </li>
            <li> <a href="#">Find Us</a> <div></div>  </li>
            <li> <a href="#">Support</a> <div></div>  </li>
            <li> <a href="#">Investor Relations</a> <div></div>  </li>
        </BurgerNav>

    </Container>
  )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-left: 10px;
    a{
        font-weight: 600;
        padding: 10px 15px;
        flex-wrap: nowrap;
    }
    @media(max-width:1200px){
        display: none;
    }
    @media(max-width:768px){
        display: none;
    }

`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        padding: 10px 10px;
    }

`
const RightM = styled.div`

    @media (max-width:768px) {
         display: none;
    }

`
const CustomMenu = styled.div`
    cursor: pointer;
   font-weight: 600;

`
const BurgerNav = styled.div`

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    text-align: start;
    overflow-y: scroll;
    transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};

    transition: transform 0.3s ease-in-out;

    li{
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        position: relative;
        a{
            margin-left: 10px;
            font-weight: 600;
            font-size: 14px;
            color: #535353;
            padding: 10px;
            transition: .5s;
            position: relative;
            
        }
        a:hover{
            color: black;
        }
        div{            
            position: absolute;
            left: 0%;
            right: 0;
            bottom: 0;
            background: rgb(60, 60, 60);
            width:0%;
            height:04%;
            transition: .5s;
            
        }
      
    }
        li:hover div{
            width: 100%;
        }
   
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;

`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`

const Logo = styled.div`
    width: 8%;
`