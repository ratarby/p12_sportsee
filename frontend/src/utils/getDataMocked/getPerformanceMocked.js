import { USER_PERFORMANCE } from "../../mock/dataMocked";
export const getPerformanceMocked = (id) => {
    try {
        const performance = USER_PERFORMANCE.find((performance) => performance.userId === id);


        userPerformance(id);
        function userPerformance(id) {
            if (performance.data.length > 0 || performance.data.length === id) {
                performance.data.forEach((data, i) => {
                    data.kind = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité'][i];
                })
            }
        }
        // console.log(performance.data)
        return performance.data

    } catch (error) {
        console.error(error);
    }
};

// console.log(getPerformanceMocked(12));
