import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    padding: 2rem;
    width: 258px;
    height: 124px;
    background: #FBFBFB;
    border-radius: 5px;
    @media (max-width: 1361px) {
        padding: .6rem;
        width: 197px;
        height: 66px;
    }
`
    
const Infos = styled.div`
    display:flex;
    flex-direction:column;
    margin-left: 24px;
`

const InfosData = styled.p`
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #282D30;
    margin-bottom:2px;
    @media (max-width: 1361px) {
        font-size: 16px;
    }
`

const InfosText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #74798C;
`

export {Wrapper, Infos, InfosData, InfosText}