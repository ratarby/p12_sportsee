import ProfilModel from "../utils/ProfilModel";
import { getInfosMocked } from "./getDataMocked/getInfosMocked";
import { getActivityMocked } from "./getDataMocked/getActivityMocked";
import { getAverageSessionsMocked } from "./getDataMocked/getAverageSessionsMocked";
import { getPerformanceMocked } from "./getDataMocked/getPerformanceMocked";
import axios from "axios";



// false = api call , true = mock data
let isMockData = true;



/**
 * Retrieves information about a user with the specified ID.
 *
 * @param {number} id - The ID of the user.
 * @return {Promise<object|null>} The user information if found, otherwise null.
 */
async function getInfos(id) {
    let result;
    if (isMockData === true) {
        return getInfosMocked(id);
    } else {
        // Endpoint
        const dataResponse = await axios.get(`http://localhost:3000/user/${id}`);
        if (dataResponse.status === 200) {
            result = dataResponse.data.data; ;
        } 
    }
    return result === undefined ? null : result;
}

/**
 * Function to retrieve activity based on ID.
 *
 * @param {number} id - The ID of the activity to retrieve
 * @return {Promise<object|null>} The retrieved activity data, or null if not found
 */
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


/**
 * Asynchronously retrieves the average sessions data for a user from the backend.
 *
 * @param {string} id - The ID of the user for which to retrieve the average sessions data.
 * @return {Object|null} The average sessions data for the user, or null if the data is undefined.
 */
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


/**
 * Retrieves the performance data for a given user ID.
 *
 * @param {number} id - The ID of the user.
 * @return {Promise<object|null>} The performance data for the user, or null if no data is found.
 */
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


/**
 * Retrieves user profile information including infos, activity, average sessions, and performance.
 *
 * @param {number} id - The user ID to retrieve profile information 
 * @return {ProfilModel} The user's profile model with infos, activity, average sessions, and performance
 */
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



    if (userInfos === null || userActivity === null || userAverageSessions === null || userPerformance === null   ) {
        return null;
    }


    return new ProfilModel(userInfos, userActivity, userAverageSessions, userPerformance);
}
export { getProfil };



