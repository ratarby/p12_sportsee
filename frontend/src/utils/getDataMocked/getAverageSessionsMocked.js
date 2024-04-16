import { USER_AVERAGE_SESSIONS } from "../../mock/dataMocked";

/**
 * Retrieves the average sessions for a user based on the provided id.
 *
 * @param {number} id - The user id to retrieve average sessions for
 * @return {object | undefined} The user's average sessions, or undefined if the user or session data is missing or invalid
 */
export const getAverageSessionsMocked = (id) => {
    try {
        const userAverageSessions = USER_AVERAGE_SESSIONS.find((session) => session.userId === id);

        if (!userAverageSessions || userAverageSessions.sessions === undefined || userAverageSessions.userId === typeof String) {
            return undefined;
        }
        userAverageSessions.sessions.forEach((session, i) => {
            session.day = ["L", "M", "M", "J", "V", "S", "D"][i];
        });

        return userAverageSessions;
        
    } catch (error) {
        console.error(error);
    }
};

// console.log('average sessions', getAverageSessionsMocked(12));
