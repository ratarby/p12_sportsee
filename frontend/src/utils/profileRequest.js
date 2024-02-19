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
    const infos = getInfos(idInt);
    const activity = getActivity(idInt);
    const averageSessions = getAverageSessions(idInt);
    const performance = getPerformance(idInt);
    const score = getTodayScore(idInt);
    return new ProfilModel(infos, activity, averageSessions, performance, score);
}
export { getProfil };



