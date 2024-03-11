import ProfilModel from "../utils/ProfilModel";
import { getInfosMocked } from "./getDataMocked/getInfosMocked";
import { getActivityMocked } from "./getDataMocked/getActivityMocked";
import { getAverageSessionsMocked } from "./getDataMocked/getAverageSessionsMocked";
import { getPerformanceMocked } from "./getDataMocked/getPerformanceMocked";
import { getTodayScoreMocked } from "./getDataMocked/getTodayScoreMocked";



let isMockData = true;



function getInfos(id) {
    let result;
    if (isMockData === true) {
        result = getInfosMocked(id);
    } else {
        result = undefined  ;
    }
    return result === undefined ? null : result;
}

function getActivity(id) {
    let result;

    if (isMockData === true) {
        result = getActivityMocked(id);
    } else {
        result = undefined || '';
    }
    if (!getActivityMocked) {
        result = undefined;
    }
    return result === undefined ? null : result;
}


function getAverageSessions(id) {
    let result;
    if (isMockData === true) {
        result = getAverageSessionsMocked(id);
    } else {
        result = undefined || '';
    }
    return result === undefined ? null : result;
}


function getPerformance(id) {
    let result;
    if (isMockData === true) {
        result = getPerformanceMocked(id);
    } else {
        result = undefined || '';
    }
    return result === undefined ? null : result;
}



function getTodayScore(id) {
    let result;
    if (isMockData === true) {
        return getTodayScoreMocked(id);
    } else {
        result = undefined || '';
    }
    return result === undefined ? null : result;
}


function getProfil(id) {
    const idInt = parseInt(id, 10);
    const userInfos = getInfos(idInt);
    // console.log('userInfos :', userInfos);
    const userActivity = getActivity(idInt)
    // console.log('userActivity :', userActivity);
    const userAverageSessions = getAverageSessions(idInt);
    // console.log('userAverageSessions :', userAverageSessions);
    const userPerformance = getPerformance(idInt);
    // console.log('userPerformance :', userPerformance);
    const userScore = getTodayScore(idInt);
    // console.log('userScore :', userScore);

     

    if (userInfos === null || userActivity === null || userAverageSessions === null || userPerformance === null || userScore === null) {
        return null;
    }

    
    return new ProfilModel(userInfos, userActivity, userAverageSessions, userPerformance, userScore);
}
export { getProfil };



