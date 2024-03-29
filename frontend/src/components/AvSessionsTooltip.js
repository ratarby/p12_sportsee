import React from 'react';
import { Container, Text } from "../styles/avSessionsTooltipStyle";

/**
 * Render a tooltip for AvSessions.
 *
 * @param {boolean} active - Indicates if the tooltip is active
 * @param {array} payload - Data payload for the tooltip
 * @return {JSX.Element} Tooltip component to render or null
 */
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


