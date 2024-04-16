import { USER_MAIN_DATA } from "../../mock/dataMocked";

/**
 * Retrieves user information based on the provided ID.
 *
 * @param {number|string} id - The ID of the user.
 * @return {object|undefined} The user information if found, otherwise undefined.
 */
export const getInfosMocked = (id) => {
    try {
        const userInfos = USER_MAIN_DATA.find((el) => el.id === id);
        

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
console.log('user infos', getInfosMocked(12));