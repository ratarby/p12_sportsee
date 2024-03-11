import { USER_ACTIVITY } from "../../mock/dataMocked";

export const getActivityMocked = (id) => {
    try {
        const userActivity = USER_ACTIVITY.find((el) => el.userId === id);

        if (!userActivity || userActivity.sessions === undefined) {
            return undefined;
        }
        

        userActivity.sessions.forEach((session, i) => {
            session.day = i + 1;
        });
        
        // console.log('userActivity :',userActivity.sessions);
        return userActivity;
    } catch (error) {
        console.error(error);
    }
};

