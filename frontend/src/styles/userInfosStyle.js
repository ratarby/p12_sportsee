import styled from "styled-components";

const Head = styled.header`
  margin-top: 4rem;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 18px;
  @media (max-width: 1280px) {
			margin-left: 2rem;
		}
  h1 {
    display: flex;
    width : 100%;
    font-weight: 600;
    font-size:48px;
    gap : 15px;
    margin-bottom:40px;
  }

`;

const Name = styled.span`
  gap : 10px;
  color: #ff0000;
`;

export {Head, Name}