import { USER_MAIN_DATA } from "../../mock/dataMocked";

export const getTodayScoreMocked = (id) => {
    try {
        const score = USER_MAIN_DATA.find((score) => score.id === id);


        userScore(id);
        function userScore() {
            if (score.todayScore <= 1 || score.score >= 1) {
                score.score = [
                    { name: 'score0', value: 100 - (score.todayScore || score.todayScore) * 100, display: 'none' },
                    { name: 'score1', value: 100 - (100 - ((score.todayScore || score.score) * 100)) },
                ];
                return score
            }
            if (score.todayScore >= 1 || score.score <= 1) {
                score.score = [
                    { name: 'score0', value: 100 - (score.score || score.score) * 100, display: 'none' },
                    { name: 'score1', value: 100 - (100 - ((score.todayScore || score.score) * 100 )) },
                ];
                return score
            }

        }

    } catch (error) {
        console.error(error);
    }
};

