import { USER_MAIN_DATA } from "../../mock/dataMocked";

/**
 * Modifies the score property of an object in the USER_MAIN_DATA array based on certain conditions.
 * @param {number} id - The ID of the object to search for in the USER_MAIN_DATA array.
 */
export const getTodayScoreMocked = (id) => {
    try {
        const userScore = USER_MAIN_DATA.find((el) => el.id === id);

        if (!userScore) {
            return undefined;
        }

        //todayScore
        return Score(userScore);

    } catch (error) {
        console.error(error);
    }

    function Score(userScore) {
        if (userScore.todayScore <= 1 || userScore.score >= 1) {
            userScore.score = [
                { name: 'score0', value: 100 - (userScore.todayScore || userScore.todayScore) * 100, display: 'none' },
                { name: 'score1', value: 100 - (100 - ((userScore.todayScore || userScore.score) * 100)) },
            ];
        }

        //score
        if (userScore.todayScore >= 1 || userScore.score <= 1) {
            userScore.score = [
                { name: 'score0', value: 100 - (userScore.score || userScore.score) * 100, display: 'none' },
                { name: 'score1', value: 100 - (100 - ((userScore.todayScore || userScore.score) * 100)) },
            ];
        }

        return userScore;
    }
};



