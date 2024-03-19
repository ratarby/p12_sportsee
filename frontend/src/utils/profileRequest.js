import ProfilModel from "../utils/ProfilModel";
import { getInfosMocked } from "./getDataMocked/getInfosMocked";
import { getActivityMocked } from "./getDataMocked/getActivityMocked";
import { getAverageSessionsMocked } from "./getDataMocked/getAverageSessionsMocked";
import { getPerformanceMocked } from "./getDataMocked/getPerformanceMocked";
import { getTodayScoreMocked } from "./getDataMocked/getTodayScoreMocked";
import axios from "axios";


// false = api call , true = mock data
let isMockData = false;



async function getInfos(id) {
    let result;

    if (isMockData === true) {
        result = getInfosMocked(id);
    } else {
        // Endpoint
        const dataResponse = await axios.get(`http://localhost:3000/user/${id}`);
        if (dataResponse.status === 200) {
            result = dataResponse.data.data;
        }
    }
    return result === undefined ? null : result;
}

async function getActivity(id) {
    let result;

    if (isMockData === true) {
        result = getActivityMocked(id);
    } else {
        // Endpoint
        const dataResponse = await axios.get(`http://localhost:3000/user/${id}/activity`);
        if (dataResponse.status === 200) {
            result = dataResponse.data.data;
        }
        // display user activity (day one to seven) from backend
        const userActivity = result;
        userActivity.sessions.forEach((session, i) => {
            session.day = i + 1;
        });
    }
    return result === undefined ? null : result;
}


async function getAverageSessions(id) {
    let result;

    if (isMockData === true) {
        result = getAverageSessionsMocked(id);
    } else {
        const dataResponse = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
        if (dataResponse.status === 200) {
            result = dataResponse.data.data;
        }
        // display user average sessions day from backend
        const userAverageSessions = result;
        userAverageSessions.sessions.forEach((session, i) => {
            session.day = ["L", "M", "M", "J", "V", "S", "D"][i];
        })
    }
    return result === undefined ? null : result;
}


async function getPerformance(id) {
    let result;

    if (isMockData === true) {
        result = getPerformanceMocked(id);
    } else {
        const dataResponse = await axios.get(`http://localhost:3000/user/${id}/performance`);
        if (dataResponse.status === 200) {
            result = dataResponse.data.data;
        }
        // display user performance from backend
        const userPerformance = result;
        performances(id);
        function performances() {
            userPerformance.data.forEach((data, i) => {
                data.kind = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"][i];
            });
            userPerformance.data.reverse();
        }
    }
    return result === undefined ? null : result;
}



async function getTodayScore(id) {
    let result;

    if (isMockData === true) {
        return getTodayScoreMocked(id);
    } else {
        const dataResponse = await axios.get(`http://localhost:3000/user/${id}`);
        if (dataResponse.status === 200) {
            result = dataResponse.data.data;
            console.log('result : ', result);
            const userScore = result;
            console.log('userScore.score : ', userScore.score);
            
            result = Score(userScore);
            return result;
        }
        function Score(userScore) {
            if (userScore.todayScore <= 1 || userScore.score >= 1) {
                userScore.score = [
                    { name: 'score0', value: 100 - (userScore.todayScore || userScore.todayScore) * 100, display: 'none' },
                    { name: 'score1', value: 100 - (100 - ((userScore.todayScore || userScore.score) * 100)) },
                ];
            }
    
            //score
            if (userScore.todayScore >= 1 || userScore.score <= 1) {
                userScore.score = [
                    { name: 'score0', value: 100 - (userScore.score || userScore.score) * 100, display: 'none' },
                    { name: 'score1', value: 100 - (100 - ((userScore.todayScore || userScore.score) * 100)) },
                ];
            }
    
            return userScore;
        }
    }

    // console.log("result : ", result);
    return result === undefined ? null : result;
}






async function getProfil(id) {
    const idInt = parseInt(id, 10);
    // console.log('idInt :', idInt);
    const userInfos = await getInfos(idInt);
    // console.log('userInfos :', userInfos);
    const userActivity = await getActivity(idInt)
    // console.log('userActivity :', userActivity);
    const userAverageSessions = await getAverageSessions(idInt);
    // console.log('userAverageSessions :', userAverageSessions);
    const userPerformance = await getPerformance(idInt);
    // console.log('userPerformance :', userPerformance);
    const userScore = await getTodayScore(idInt);
    // console.log('userScore :', userScore);



    if (userInfos === null || userActivity === null || userAverageSessions === null || userPerformance === null || userScore === null) {
        return null;
    }


    return new ProfilModel(userInfos, userActivity, userAverageSessions, userPerformance, userScore);
}
export { getProfil };



