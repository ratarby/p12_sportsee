import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
    height: 1024px;
    margin: 50px auto;
`

const LayoutContainer = styled.div`
    width: 100%;
    max-width: 1246px;
    margin-left: 12rem;
`

export {MainContainer, LayoutContainer}