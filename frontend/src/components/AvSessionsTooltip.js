import React from 'react';
import {Container, Text} from "../styles/avSessionsTooltipStyle";
const AvSessionsTooltip = ({active, payload}) => {
    if (active){
        return (
            <Container>
                <Text>{payload[0].value}mn</Text>
            </Container>
        );
    }
    return null
}

export default AvSessionsTooltip;

