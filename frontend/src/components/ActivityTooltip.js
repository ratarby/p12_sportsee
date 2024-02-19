import React from 'react';
import {Container, Text} from "../styles/activityToolTypeStyle";
import PropTypes from 'prop-types';




/**
 * A function that renders the ActivityToolType component based on the 'active' prop and displays the payload values.
 *
 * @param {boolean} active - indicates if the component should be active
 * @param {object} payload - an object containing values to be displayed
 * @return {JSX.Element} the rendered component or null if 'active' is false
 */
 export default function ActivityTooltip({active, payload}) {
    if (active){
    return (
        <Container>
            <Text>{payload[0].value}kg</Text>
            <Text>{payload[1].value}Kcal</Text>
        </Container>
    
     );
    }
    return null
}

ActivityTooltip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};

