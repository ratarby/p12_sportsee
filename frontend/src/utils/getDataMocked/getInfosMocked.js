import { USER_MAIN_DATA } from "../../mock/dataMocked";

export const getInfosMocked = (id) => {
    try {
        const userInfos = USER_MAIN_DATA.find((el) => el.id === id);
        // console.log('userInfos :',userInfos);

        

        if (!userInfos) {
            return undefined;
        };

        if (!userInfos) {
            return undefined;
        }
        if ( typeof id === "number") {
            return userInfos;
        } if ( typeof id === "string") {
            return undefined;
        }
        if (  id === '' || id === null || id === undefined) {
            return undefined;
        }
        return userInfos;

        

        } catch (error) {
            console.error(error);
        }
    
};
// console.log(getInfosMocked(12));