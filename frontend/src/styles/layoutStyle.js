import styled from "styled-components";

const DisplayNone = styled.div`
    display: none;
    
`

const MainContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
    height: auto;
    margin: 3rem auto;
`

const LayoutContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    
`

export {MainContainer, LayoutContainer , DisplayNone}