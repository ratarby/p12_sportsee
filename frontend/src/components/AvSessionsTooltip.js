import React from 'react';
import { Container, Text } from "../styles/avSessionsTooltipStyle";
import PropTypes from 'prop-types';

export default function AvSessionsTooltip({ active, payload }) {
    if (active) {
        return (
            <Container>
                <Text>{payload[0].value}mn</Text>
            </Container>
        );
    }
    return null;
}

AvSessionsTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
};
