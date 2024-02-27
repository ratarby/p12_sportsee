import { USER_PERFORMANCE } from "../../mock/dataMocked";

export const getPerformanceMocked = (id) => {
    try {
        const userPerformance = USER_PERFORMANCE.find((el) => el.userId === id);

        userPerformance.data.forEach((data, i) => {
            data.kind = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"][i];
        });
        // console.log(userPerformance.data);
        return userPerformance.data;
    } catch (error) {
        console.error(error);
    }
};
