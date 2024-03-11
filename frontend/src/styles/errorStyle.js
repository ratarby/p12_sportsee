import styled from "styled-components";

const Main = styled.main`
  margin-top: 14rem;
  margin-left: 6rem;
  @media (max-width: 1361px) {
    width : 1024px;
    margin-top: 14rem ;
    margin-left: 7.8rem;
  }
  a{
      margin-top: 7rem;
      display:flex;
      flex-direction:column;
      text-align: center;
      font-weight: bold;
      font-size: 1.5rem;
      @media (max-width: 1361px) {
        width: 1024px;
        font-size: 1.3rem;
      }
  }
  p{
      font-size: 2.5rem;
      text-align: center;
      @media (max-width: 1361px) {
        font-size: 1.5rem;
      }
  }
`
const Title = styled.h1`
color: red;
font-size: 10rem;
text-align: center;
margin-bottom: 5rem;
@media (max-width: 1361px) {
    font-size: 5rem;
  }
`
export {Main, Title}