import React from 'react'
import {Head, Name} from "../styles/userInfosStyle";
import { getProfile } from '../utils/profileRequest';


export default function User() {

    return (
        <div>
          <Head>
            <h1>Bonjour <Name>toto</Name></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </Head>

        </div>
    )
}

