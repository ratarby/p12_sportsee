import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProfil } from "../utils/profileRequest";
import { Main, Container, Content, BottomChart } from "../styles/userStyle";
import KeyData from "../components/KeyData";
import caloriesIcon from "../assets/caloriesIcon.svg";
import proteinesIcon from "../assets/proteinesIcon.svg";
import carbohydrateIcon from "../assets/carbohydrateIcon.svg";
import lipidIcon from "../assets/lipidIcon.svg";
import UserInfos from "../components/UserInfos";
import BarChart from "../components/BarChart";
import AverageSessions from "../components/AverageSessions";
import Performance from "../components/Performance";
import ScoreChart from "../components/ScoreChart";


/**
 * Fetches user profile data and displays it on the user interface.
 *
 * @param {string} id - The ID of the user
 * @param {function} navigate - Function to navigate to different pages
 * @return {JSX.Element} The user interface displaying the user profile data
 */
export default function User() {
  const [profile, setProfile] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
        const profileData = await getProfil(id);
        if(!profileData) {
          navigate('/error');
        }
        setProfile(profileData);
    };
    fetchProfile();
  }, [id, navigate]);

  return (
    (profile && <Main>
      <Container>
        <UserInfos firstName={profile.firstName} />
        <Content>
          <section>
            <BarChart userActivity={profile.userActivity} />
            <BottomChart>
              <AverageSessions
                userAverageSessions={profile.userAverageSessions}
              />
              <Performance userPerformance={profile.userPerformance} />
              <ScoreChart userScore={profile.userScore} />
            </BottomChart>
          </section>
          <aside>
            <KeyData
              key={profile.calorie}
              icon={caloriesIcon}
              userInfos={`${profile.calorie}kcal`}
              text="Calories"
            />
            <KeyData
              key={profile.protein}
              icon={proteinesIcon}
              userInfos={`${profile.protein}g`}
              text="Protein"
            />
            <KeyData
              key={profile.carbohydrate}
              icon={carbohydrateIcon}
              userInfos={`${profile.carbohydrate}g`}
              text="Carbohydrates"
            />
            <KeyData
              key={profile.lipid}
              icon={lipidIcon}
              userInfos={`${profile.lipid}g`}
              text="Lipids"
            />
          </aside>
        </Content>
      </Container>
    </Main>
  )
  );
}
