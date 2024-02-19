import { USER_ACTIVITY } from "../../mock/dataMocked";

export const getActivityMocked = (id) => {
    try {
        const activity = USER_ACTIVITY.find((activity) => activity.userId === id);

        for (let i = 0; i < activity.sessions.length; i++) {
            activity.sessions[i].day = i + 1;
        }
        // console.log(activity);
        return activity;
    } catch (error) {
        console.error(error);
    }
};
