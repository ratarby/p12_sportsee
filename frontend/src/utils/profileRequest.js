import ProfilModel from "../utils/ProfilModel";
import { getInfosMocked } from "./getDataMocked/getInfosMocked";
import { getActivityMocked } from "./getDataMocked/getActivityMocked";
import { getAverageSessionsMocked } from "./getDataMocked/getAverageSessionsMocked";
import { getPerformanceMocked } from "./getDataMocked/getPerformanceMocked";
import { getTodayScoreMocked } from "./getDataMocked/getTodayScoreMocked";



let isMockData = true;


function getInfos(id) {
    if (isMockData === true) {
        return getInfosMocked(id);
    } else {
        return undefined;
    }
}

function getActivity(id) {
    if (isMockData === true) {
        return getActivityMocked(id);
    } else {
        return undefined;
    }
}


function getAverageSessions(id) {
    if (isMockData === true) {
        return getAverageSessionsMocked(id);
    } else {
        return undefined;
    }
}

function getPerformance(id) {
    if (isMockData === true) {
        return getPerformanceMocked(id);
    } else { 
        return undefined;
    } 
}


function getTodayScore(id) {
    if (isMockData === true) {
        return getTodayScoreMocked(id);
    } else {
        return undefined
    }
}


function getProfil(id) {
    const idInt = parseInt(id, 10);
    const userInfos = getInfos(idInt);
    const userActivity = getActivity(idInt);
    const userAverageSessions = getAverageSessions(idInt);
    const userPerformance = getPerformance(idInt);
    const userScore = getTodayScore(idInt);
    return new ProfilModel(userInfos, userActivity, userAverageSessions, userPerformance, userScore);
}
export { getProfil };



