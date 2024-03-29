import React from 'react';
import { Wrapper, Infos, InfosData, InfosText } from "../styles/keyDataStyle";


/**
 * Renders a component that displays key data with an icon, user information, and text.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - {string} icon - The URL of the icon to display.
 *   - {string} userInfos - The user information to display.
 *   - {string} text - The text to display.
 * @return {JSX.Element} The rendered component.
 */
export default function KeyData({ icon, userInfos, text }) {
    return (
        <Wrapper>
            <img src={icon} alt="calories-icon" />
            <Infos>
                <InfosData>{userInfos}</InfosData>
                <InfosText>{text}</InfosText>
            </Infos>
        </Wrapper>);
}


