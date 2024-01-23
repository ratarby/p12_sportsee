import styled from "styled-components";

const Main = styled.main`
  max-width: 1440px;
  margin-left: 1.5rem;
  font-sized : 1.5rem;

  h2 {
    font-size: 2.8rem;}
  a {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    color: red;
    font-size: 1.5rem;
  }
`;

const Title = styled.h2`
  margin: 4rem 0rem;
`;

export {Main, Title}