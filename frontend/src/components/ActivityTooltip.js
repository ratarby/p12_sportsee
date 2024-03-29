import React from 'react';
import { Container, Text } from "../styles/activityToolTypeStyle";


/**
 * Renders a tooltip component for displaying activity data.
 *
 * @param {boolean} active - Indicates whether the tooltip is active or not.
 * @param {Array} payload - An array containing the payload data for the tooltip.
 * @return {JSX.Element|null} The rendered tooltip component or null if the tooltip is not active.
 */
export default function ActivityTooltip({ active, payload }) {
    if (active) {
        return (
            <>
                <Container>
                    <Text>{payload[0].value}kg</Text>
                    <Text>{payload[1].value}Kcal</Text>
                </Container>
            </>
        );
    }
    return null
}



