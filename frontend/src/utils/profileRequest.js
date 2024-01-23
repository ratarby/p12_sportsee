import {ProfilModel} from "../utils/ProfilModel";
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "../mock/dataMocked";


let isMockData = true;


/**
 * Returns the information based on the given ID.
 *
 * @param {type} id - The ID used to retrieve the information.
 * @return {type} The information based on the given ID.
 */

function getInfos(id) {
    if (isMockData) {
        return USER_MAIN_DATA;
    }
}


function getActivity(id) {
    if (isMockData) {
        return USER_ACTIVITY;
    }
} 

function getAverageSessions(id) {
    if (isMockData) {
        return USER_AVERAGE_SESSIONS;
    }
} 
function getPerformance(id) {
    if (isMockData) {
        return USER_PERFORMANCE;
    }
} 


function getProfile(id) {
    const infos = getInfos(id);  
    const activity = getActivity(id);
    const averageSession = getAverageSessions(id);
    const performance = getPerformance(id);

    return new ProfilModel(infos, activity, averageSession, performance);
}
export default getProfile();



