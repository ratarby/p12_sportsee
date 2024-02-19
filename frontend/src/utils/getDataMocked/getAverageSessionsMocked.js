import { USER_AVERAGE_SESSIONS } from "../../mock/dataMocked";

export const getAverageSessionsMocked = (id) => {
    try {
        const averageSessions = USER_AVERAGE_SESSIONS.find((sessions) => sessions.userId === id);

        averageSessions.sessions.forEach((session, i) => {
            session.day = ["L", "M", "M", "J", "V", "S", "D"][i];
        });
        return averageSessions;
    } catch (error) {
        console.error(error);
    }
};

// console.log(getAverageSessionsMocked(12));
