import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Infos, InfosData, InfosText } from "../styles/keyDataStyle";

/**
 * Renders the KeyData component with the specified icon, infos, and text.
 *
 * @param {Object} icon - The icon to be displayed
 * @param {string} infos - The information to be displayed
 * @param {string} text - The text to be displayed
 * @return {JSX.Element} The KeyData component
 */
export default function KeyData({ icon, infos, text, }) {

    return (
        <Wrapper>
            <img src={icon} alt="calories-icon" />
            <Infos>
                <InfosData>{infos}</InfosData>
                <InfosText>{text}</InfosText>
            </Infos>
        </Wrapper>);
}

KeyData.propTypes = {
    icon: PropTypes.any,
    info: PropTypes.string,
    text: PropTypes.string,
}
