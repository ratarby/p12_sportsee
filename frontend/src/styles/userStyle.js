import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  max-width: 1240px;
  margin-left: 14rem;
  @media screen and (max-width: 1250px) {
    grid-gap: 1rem;
  }
`;
const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: auto;
  margin-top: 2%;
  @media (max-width: 1430px){
}
`;

const Content = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: start;
width: 1126px;
@media (min-width: 1284px) and (max-width: 1283px) {
  width: 67.3%;
  margin-top: 4.2rem;
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
    grid-template-columns: 3fr 3fr 2fr;
    grid-gap: 1rem;
    height: auto;
    margin-left: -0.2rem;
    margin-top: 1rem;
  }

}

`;

const BottomChart = styled.div`
  margin-top: -1rem;
  margin-left:0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.9rem;
  transform: translateX(-.09rem);,
  justify-content: space-between;
`;

export {Main, Container, Content, BottomChart}