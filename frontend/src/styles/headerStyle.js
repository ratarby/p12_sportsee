import styled from "styled-components";

  const Head = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  max-width: 1440px;
  height: 91px;
  background: #020203;
  padding: 0 87px 0 29px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  @media (max-width: 1360px) {
    width: 1182px;
  }
  img {
    width: 178px;
    margin-right: 150px;
  }`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
    font-weight: 500;
    font-size: 24px;
  }
  @media (max-width: 1360px) {
    transform: translateX(-40px);
  }
`;

export  {Head,Nav};

