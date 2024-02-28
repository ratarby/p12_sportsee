import styled from 'styled-components';

const Container = styled.div`
position: relative;
width: 258px;
height: 263px;
margin-left: 0 auto;
margin-right: 0 auto;
background: #FBFBFB;
border-radius: 5px;
@media (max-width: 1361px) {
    width: 258px;
    height: 238px;
}
`;

const Title = styled.h2`
position: absolute;
left: 20%;
top: 15%;
transform: translate(-50%, -80%);
font-weight: 500;
font-size: 15px;
line-height: 24px;
color: #20253a;
font-weight: 700;
@media (max-width: 1361px) {
    font-size: 15px;
}
`;

const Text = styled.p`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-52%, -30%);
font-size: 14px;
line-height: 24px;
font-weight: 700;
text-align: center;
color: #74798c;
@media (max-width: 1361px) {
    font-size: 13px;
    transform: translate(-52%, -30%);
}
`;

const Score = styled.span`
color: rgba(0, 0, 0, 0.8);
font-weight: 700;
font-size: 25px;
line-height: 12px;
margin-left: 39px;
@media (max-width: 1361px) {
    font-size: 26px;
}
`;


export {Container, Title, Text, Score}