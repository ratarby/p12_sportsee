import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProfil } from '../utils/profileRequest';
import { Main, Container, Content, BottomChart } from '../styles/userStyle';
import KeyData from '../components/KeyData';
import caloriesIcon from '../assets/caloriesIcon.svg';
import proteinesIcon from '../assets/proteinesIcon.svg';
import carbohydrateIcon from '../assets/carbohydrateIcon.svg';
import lipidIcon from '../assets/lipidIcon.svg';
import UserInfos from '../components/UserInfos';
import Error from '../components/Error';
import BarChart from '../components/BarChart';
import AverageSessions from '../components/AverageSessions';
import Performance from '../components/Performance';
import ScoreChart from '../components/ScoreChart';

export default function User() {
  const [profil, setProfil] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchedProfile = getProfil(id);
    if (!fetchedProfile) {
      return alert('data error');
    }
    setProfil(fetchedProfile);
  }, [id]);

  if (!profil ) {
    return <Error />;
  }

  return (
    <Main>
      <Container>
        <UserInfos
          key={profil.id}
          firstName={profil.firstName}
        />
        <Content>
          <>
            <section>
              <BarChart
                key={profil.id}
                data={profil.activity}
              />
              <BottomChart>
                < AverageSessions
                  key={profil.id}
                  data={profil.averageSessions}
                />
                <Performance
                  key={profil.performance}
                  data={profil.data}
                />
                <ScoreChart
                  key={profil.score}
                  data={profil.score}
                />

              </BottomChart>
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
                infos={`${profil.protein}g`}
                text="Proteines"
              />
            </aside>
          </>
        </Content>
      </Container>
    </Main>
  );
  ;
}



