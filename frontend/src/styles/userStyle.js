import styled from "styled-components";

const Main = styled.main`
  margin: auto;
  width: 100%;
  max-width: 1246px;
`;
const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: auto;
  margin-top: 2%;
  @media (max-width: 1430px){
      margin-left: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  aside {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 835px;
    flex-direction: column;
    height: 670px;
    margin: auto;
    margin-left: 56rem;
    @media (max-width: 1246px) {
      display: grid;
      grid-template-columns: 3fr 3fr 2fr;
      margin-left: 60px;
      height: auto;
    }
    > div {
      margin: 20px 5px;
    }
  }
`;

const BottomChart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  justify-content: space-between;
`;

export {Main, Container, Content, BottomChart}