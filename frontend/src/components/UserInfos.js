import React from 'react'
import { Head, Name } from "../styles/userInfosStyle";
import { Infos } from "../styles/infosStyle";
import PropTypes from 'prop-types';



export default function UserInfos({firstName}) {
  return (
    <>
        <Head>
          <Infos>
            <h1>Bonjour <Name>{firstName}</Name></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏
            </span>
          </Infos>
        </Head>
        
    </>
  )
}

UserInfos.propTypes = {
    firstName: PropTypes.string
}