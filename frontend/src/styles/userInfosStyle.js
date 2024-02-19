import styled from "styled-components";

const Head = styled.header`
  width: 100%;
  max-width: 1126px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 18px;
  @media screen and (max-width: 1283px){
    width: 835px; 
  }

  h1 {
    font-weight: 600;
    font-size:48px;
    margin-bottom:20px;
  }
`;

const Name = styled.span`
  color: #ff0000;
`;

export {Head, Name}