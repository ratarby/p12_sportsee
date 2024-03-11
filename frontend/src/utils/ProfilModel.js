
class ProfilModel {
    constructor({ userInfos, todayScore, score, keyData }, userActivity, userAverageSessions, userPerformance ) {
        const { proteinCount, carbohydrateCount, lipidCount, calorieCount } = keyData;

        this.firstName = userInfos.firstName;
        this.protein = proteinCount;
        this.carbohydrate = carbohydrateCount;
        this.lipid = lipidCount;
        this.calorie = calorieCount;
        this.userActivity = userActivity.sessions;

        this.userAverageSessions = userAverageSessions.sessions;
        this.userPerformance = userPerformance.data || userPerformance;
        this.userScore = score || todayScore;
        
    }
}

export default ProfilModel;
