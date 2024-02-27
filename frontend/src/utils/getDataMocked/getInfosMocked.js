import { USER_MAIN_DATA } from "../../mock/dataMocked";

export const getInfosMocked = (id) => {
    try {
        const userInfos = USER_MAIN_DATA.find((el) => el.id === id);
        //console.log(`firstName : ${userInfos.userInfos.firstName}`);

        // console.log(`proteinCount : ${userInfos.keyData.proteinCount}g`);
        // console.log(`carbohydrateCount : ${userInfos.keyData.carbohydrateCount}g`);
        // console.log(`lipidCount : ${userInfos.keyData.lipidCount}g`);
        // console.log(`calorieCount : ${userInfos.keyData.calorieCount}kCal`);

        return userInfos;
    } catch (error) {
        console.error(error);
    }
};
// console.log(getInfosMocked(12));