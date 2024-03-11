import { USER_PERFORMANCE } from "../../mock/dataMocked";

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

        // console.log(userPerformance.data);
        return userPerformance.data;
    } catch (error) {
        console.error(error);
    }
};
