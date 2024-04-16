import { USER_PERFORMANCE } from "../../mock/dataMocked";

/**
 * Retrieves the mocked performance data for a given user ID.
 *
 * @param {number} id - The ID of the user
 * @return {Array} The performance data for the user
 */
export const getPerformanceMocked = (id) => {
    try {
        const userPerformance = USER_PERFORMANCE.find((el) => el.userId === id);

        if (!userPerformance || userPerformance.data === undefined) {
            return undefined;
        }

        performances(id);
        function performances() {
            userPerformance.data.forEach((data, i) => {
                data.kind = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"][i];
            });
            userPerformance.data.reverse();
        }

        return userPerformance.data;
    } catch (error) {
        console.error(error);
    }
};
// console.log('performances', getPerformanceMocked(12));
