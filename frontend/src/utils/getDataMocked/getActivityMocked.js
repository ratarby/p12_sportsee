import { USER_ACTIVITY } from "../../mock/dataMocked";

export const getActivityMocked = (id) => {
    try {
        const userActivity = USER_ACTIVITY.find((el) => el.userId === id);

        // for (let i = 0; i < userActivity.sessions.length; i++) {
        //     userActivity.sessions[i].day = i + 1;
        // }

        userActivity.sessions.forEach((session, i) => {
            session.day = i + 1;
        });
        
        // console.log('userActivity :',userActivity.sessions);
        return userActivity;
    } catch (error) {
        console.error(error);
    }
};

