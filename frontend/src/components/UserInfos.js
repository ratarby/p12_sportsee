import React from 'react'
import { Head, Name } from "../styles/userInfosStyle";
import { Infos } from "../styles/infosStyle";



/**
 * Renders the user information component.
 *
 * @param {object} props - The props object containing the firstName property.
 * @param {string} props.firstName - The first name of the user.
 * @return {JSX.Element} The rendered user information component.
 */
export default function UserInfos({firstName}) {
  return (
        <Head>
          <Infos>
            <h1>Bonjour <Name>{firstName}</Name></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏
            </span>
          </Infos>
        </Head>
  )
}

