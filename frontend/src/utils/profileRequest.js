import ProfilModel from "../utils/ProfilModel";
import { getInfosMocked } from "./getDataMocked/getInfosMocked";
import { getActivityMocked } from "./getDataMocked/getActivityMocked";
import { getAverageSessionsMocked } from "./getDataMocked/getAverageSessionsMocked";
import { getPerformanceMocked } from "./getDataMocked/getPerformanceMocked";
import axios from "axios";


// false = api call , true = mock data
let isMockData = true;



async function getInfos(id) {
    let result;



    if (isMockData === true) {
        return getInfosMocked(id);
    } else {
        // Endpoint
        const dataResponse = await axios.get(`http://localhost:3000/user/${id}`);
        if (dataResponse.status === 200) {
            result = dataResponse.data.data ;
            
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


async function getProfil(id) {
    const idInt = parseInt(id, 10);
    // console.log('idInt :', idInt);
    const userInfos = await getInfos(idInt);
    // console.log('userInfos :', userInfos);
    const userActivity = await getActivity(idInt)
    // console.log('userActivity :', userActivity);
    const userAverageSessions = await getAverageSessions(idInt);
    const userPerformance = await getPerformance(idInt);



    if (userInfos === null || userActivity === null || userAverageSessions === null || userPerformance === null   ) {
        return null;
    }


    return new ProfilModel(userInfos, userActivity, userAverageSessions, userPerformance);
}
export { getProfil };



