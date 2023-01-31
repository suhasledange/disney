import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Movies() {

  const movies = useSelector(selectMovies);
  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>

          {
            movies && 
            movies.map((movie)=>(
              <Wrap key={movie.id}>
                <Link to={`/detail/${movie.id}`}>
                    <img src={movie.cardImg}/>
                </Link>
            </Wrap>
            ))
          }          

        </Content>
    
    </Container>
  )
}

export default Movies

const Container = styled.div`
  h4{
    margin-top: 5rem;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 1.1px;
    margin-bottom: 1rem;
  }

`
const Content = styled.div`

  display: grid;
  gap:2rem;
  grid-template-columns: repeat(5,minmax(0,1fr));
  @media (max-width:1200px){
    grid-template-columns: repeat(3,1fr);

  }
`
const Wrap = styled.div`
display: flex;
    cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249,249,249,0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  transition: 250ms;
  &:hover{
    transform: scale(1.2);
    border-color: rgba(249,249,249,0.8);
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }

`

const ImgDesc = styled.div`
`