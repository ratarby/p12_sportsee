import { USER_MAIN_DATA } from "../../mock/dataMocked";

export const getInfosMocked = (id) => {
    try {
        const mainData = USER_MAIN_DATA.find((el) => el.id === id);
        


        return mainData;
    } catch (error) {
        console.error(error);
    }
};
// console.log(getInfosMocked(12));