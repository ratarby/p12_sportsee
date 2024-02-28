import styled from "styled-components";

const Main = styled.main`
  margin: 6rem;
  width: 100%;
  max-width: 1240px;
  margin-left: 14rem;
  @media  (max-width: 1361px) {
    margin-top:8rem;
    margin-left: 14rem;
    grid-gap: 1rem;
  }
`;
const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: auto;
  margin-top:10vh;
`;

const Content = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: start;
width: 1126px;
@media (min-width: 1284px) and (max-width: 1283px) {
  width: 67.3%;
}
aside {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 835px;
  flex-direction: column;
  height: 600px;
  margin: auto;
  margin-left: 2rem;
  @media (max-width: 1361px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    margin-left: -0.2rem;
    margin-top: .5rem;
  }
}
`;

const BottomChart = styled.div`
  margin-top: -1rem;
  margin-left:0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.9rem;
  justify-content: space-between;
`;

export {Main, Container, Content, BottomChart}