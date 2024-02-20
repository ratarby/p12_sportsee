import { USER_MAIN_DATA } from "../../mock/dataMocked";

export const getTodayScoreMocked = (id) => {
    try {
        const scoreData = USER_MAIN_DATA.find((score) => score.id === id);
        let score = scoreData.todayScore || scoreData.score;
        
        score = (score * 100).toFixed(0);
console.log("score",score,"scoreData", scoreData);

//             score.score = [
//                     { name: 'score0', value: 100 - score * 100, display: 'none' },
//                     { name: 'score1', value: 100 - (100 - (score * 100)) },
//                 ];

                return score;

        

    } catch (error) {
        console.error(error);
    }
};

