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
export default function KeyData({ icon, userInfos, text }) {
// console.log('icon :', icon );
// console.log('infos :', infos );
// console.log('text :', text );
    return (
        <Wrapper>
            <img src={icon} alt="calories-icon" />
            <Infos>
                <InfosData>{userInfos}</InfosData>
                <InfosText>{text}</InfosText>
            </Infos>
        </Wrapper>);
}

KeyData.propTypes = {
    icon: PropTypes.any,
    userInfos: PropTypes.string,
    text: PropTypes.string,
}
