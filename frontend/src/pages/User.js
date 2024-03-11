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
    console.log(fetchedProfile);
    // if (!fetchedProfile) {
    //   return alert('data error');
    // }
    setProfil(fetchedProfile);
  }, [id]);

  if (profil === null || profil === '' ) {
    return <Error />;
  }

  return (
    <Main>
      <Container>
        <UserInfos
          firstName={profil.firstName}
        />
        <Content>
            <section>
              <BarChart
                userActivity={profil.userActivity}
              />
              <BottomChart>
                < AverageSessions
                  userAverageSessions={profil.userAverageSessions}
                />
                <Performance
                  userPerformance={profil.userPerformance}
                />
                <ScoreChart
                  userScore={profil.userScore}
                />
              </BottomChart>
            </section>
            <aside>
              <KeyData 
                key={profil.calorie}
                icon={caloriesIcon}
                userInfos={`${profil.calorie}kcal`}
                text="Calories"
              />
              <KeyData
                key={profil.protein}
                icon={proteinesIcon}
                userInfos={`${profil.protein}g`}
                text="Proteines"
              />
              <KeyData
                key={profil.carbohydrate}
                icon={carbohydrateIcon}
                userInfos={`${profil.carbohydrate}g`}
                text="Glucides"
              />
              <KeyData
                key={profil.lipid}
                icon={lipidIcon}
                userInfos={`${profil.protein}g`}
                text="Proteines"
              />
            </aside>
        </Content>
      </Container>
    </Main>
  );
}

// loader function




