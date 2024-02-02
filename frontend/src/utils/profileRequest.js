import ProfilModel from "../utils/ProfilModel";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../mock/dataMocked";



let isMockData = true;



/**
 * Asynchronous function to retrieve information based on the provided ID.
 *
 * @param {number} id - The ID used to retrieve information.
 * @return {Object} An object containing the main data corresponding to the provided ID.
 */
const getInfosMocked =  (id) => {
    try {
        const mainData = USER_MAIN_DATA.find((el) => el.id === id);
        return mainData ;
    } catch (error) {
        console.error(error);
    }
};

/**
 * Retrieves the activity for the given user ID from the USER_ACTIVITY array.
 *
 * @param {string} userId - The ID of the user to retrieve activity for
 * @return {Object} An object containing the activity for the user
 */
const getActivityMocked =  (userId) => {
    try {
        const activity = USER_ACTIVITY.find((activity) => 
        activity.userId === userId);
        return activity;
    } catch (error) {
        console.error(error);
    }
};

const getAverageSessionsMocked =  (userId) => {
    try {
        const averageSessions = USER_AVERAGE_SESSIONS.find((sessions) => sessions.userId === userId);
        return averageSessions;
    } catch (error) {
        console.error(error);
    }
};


const getPerformanceMocked =  (userId) => {
    try {
        const performance = USER_PERFORMANCE.find((performance) => performance.userId === userId);
        return performance ;
    } catch (error) {
        console.error(error);
    }
}

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
        return getPerformanceMocked;
    } else {
        return undefined;
    }
} 


function getProfil(id, userId) {
    const idInt = parseInt(id, 10);
    const userIdInt = parseInt(userId, 10);
    const infos = getInfos(idInt);  
    const activity = getActivity(userIdInt);
    const averageSessions = getAverageSessions(userIdInt);
    const performance = getPerformance(userIdInt);
    return new ProfilModel (infos , activity, averageSessions, performance);
}
export  {getProfil};



