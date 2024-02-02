import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:2em;
    width: 258px;
    height: 124px;
    background: #FBFBFB;
    border-radius: 5px;
    margin-bottom: 32px;
`
    
const Infos = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:24px;
`

const InfosData = styled.p`
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #282D30;
    margin-bottom:2px;
`

const InfosText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #74798C;
`

export {Wrapper, Infos, InfosData, InfosText}