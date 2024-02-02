import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProfil } from '../utils/profileRequest';
import KeyData from '../components/KeyData';
import caloriesIcon from '../assets/caloriesIcon.svg';
import proteinesIcon from '../assets/proteinesIcon.svg';
import carbohydrateIcon from '../assets/carbohydrateIcon.svg';
import lipidIcon from '../assets/lipidIcon.svg';
import {  Main, Container, Content  } from '../styles/userStyle';
import UserInfos from '../components/UserInfos';

export default function User() {
  const [profil, setProfile] = useState([]);
  const { id, userId } = useParams();

  useEffect(() => {
    const fetchedProfile = getProfil(id, userId);
    if (!fetchedProfile) {
      return alert ('data error');
    }
    setProfile(fetchedProfile);
  }, [id, userId]);


  return (
    <Main>


      <Container>
        <UserInfos  
          firstName={`${profil.firstName}`} 
        />
          
        <Content>
          <section>

          </section>
          <aside>
            <KeyData 
              key={profil.calorie}
              icon={caloriesIcon}
              infos={`${profil.calorie}kcal`}
              text="Calories" 
            />
            <KeyData
              key={profil.protein}
              icon={proteinesIcon}
              infos={`${profil.protein}g`}
              text="Proteines"
            />
            <KeyData
              key={profil.carbohydrate}
              icon={carbohydrateIcon}
              infos={`${profil.carbohydrate}g`}
              text="Glucides"
            />
            <KeyData
              key={profil.lipid}
              icon={lipidIcon}
              infos={profil.protein}
              text="Proteines"
            />
          </aside>
        </Content>
      </Container>
    </Main>
  );
}



