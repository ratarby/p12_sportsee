import { USER_AVERAGE_SESSIONS } from "../../mock/dataMocked";

export const getAverageSessionsMocked = (id) => {
    try {
        const userAverageSessions = USER_AVERAGE_SESSIONS.find((session) => session.userId === id);

        if (!userAverageSessions || userAverageSessions.sessions === undefined || userAverageSessions.userId === typeof String) {
            return undefined;
        }
        userAverageSessions.sessions.forEach((session, i) => {
            session.day = ["L", "M", "M", "J", "V", "S", "D"][i];
        });

        // console.log('userAverageSessions', userAverageSessions.sessions);
        return userAverageSessions;
        
    } catch (error) {
        console.error(error);
    }
};

// console.log(getAverageSessionsMocked(12));
