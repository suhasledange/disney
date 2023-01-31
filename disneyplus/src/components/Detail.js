import React, {useEffect,useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'

function Detail() {

    const { id } = useParams();
    const [movie,setMovie] = useState()
    useEffect(()=>{
            db.collection("movies")
            .doc(id)
            .get()
            .then((doc)=>{
                if(doc.exists){
                    setMovie(doc.data());
                }
                else{}
            })
     

    },[])


  return (
    <Container>
        {movie && (
        <>
        <Background>
            <img src={movie.backgroundImg}/>
        </Background>
        <ImageTitle>
            <img src={movie.titleImg}/>
        </ImageTitle>
        <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                        <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
        </Controls>
        <SubTitle>{movie.subTitle}</SubTitle>
        <Descrip>{movie.description}</Descrip> 
        </> )
        }
    </Container>

)
}

export default Detail


const Container = styled.div`
   padding: 0 calc(3.5vw + 5px);
   height: 100vh; 
   position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 10rem;
`
const Background = styled.div`
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    bottom:0;
    right: 0;
    margin-top:70px;;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    filter: brightness(50%);


`
const ImageTitle = styled.div`
    img{
        width:400px;
    }
    @media (max-width:1200px){
        width:200px;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
        border-radius: 5px;
        font-size: 15px;
        padding: 0px 24px;
        margin-right:22px ;
        display: flex;
        align-items: center;
        height: 56px;
        background: rgb(249,249,249);
        border: none;
        letter-spacing: 1.8px;
        cursor: pointer;
        transition: 250ms;

        &:hover{
        background: rgb(198,198,198);
        }

`
const TrailerButton = styled(PlayButton)`
        background: rgb(0,0,0,0.3);
        border: 1px solid rgb(249,249,249);
        color: rgb(249,249,249);
        
        &:hover{
            color: black;
        }
`
const AddButton = styled.button`
        margin-right: 16px;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 2px solid white;
        background: rgba(0,0,0,0.6);
        cursor: pointer;
        span{
            font-size: 30px;
            color: white;
        }
`
const GroupWatchButton = styled(AddButton)`

            background: rgb(0,0,0);

`
const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 16px;
    min-height: 20px;
    margin-top: 26px;
`
const Descrip = styled.p`
    line-height: 1.4;
    font-size: 20px;
    margin-top:16px;
    color: rgb(249,249,249); 
    width: 50%;

    @media (max-width:1200px){
        width: 80%;
    }
`
