import styled from "styled-components";

const Head = styled.header`
  width: 100%;
  max-width: 1440px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 18px;
  @media screen and (max-width: 1361px){
    width: 835px;
    font-size: 16px;
    margin-bottom: 40px; 
  }

  h1 {
    font-weight: 600;
    font-size:48px;
    margin-bottom:20px;
    @media screen and (max-width: 1361px){
      font-size: 38px;
      margin-top:-15px;
      margin-bottom: 15px;
    }
  }
`;

const Name = styled.span`
  color: #ff0000;
`;

export {Head, Name}