import { USER_ACTIVITY } from "../../mock/dataMocked";

/**
 * Retrieves the activity of a user based on their ID.
 *
 * @param {number} id - The ID of the user.
 * @return {object|undefined} The user's activity, or undefined if it cannot be found.
 */
export const getActivityMocked = (id) => {
    try {
        const userActivity = USER_ACTIVITY.find((el) => el.userId === id);

        if (!userActivity || userActivity.sessions === undefined) {
            return undefined;
        }
        
        userActivity.sessions.forEach((session, i) => {
            session.day =  i + 1;
        });
        
        // console.log('userActivity :',userActivity.sessions);
        return userActivity;
    } catch (error) {
        console.error(error);
    }
};

