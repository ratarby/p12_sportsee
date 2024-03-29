
class ProfilModel {
    constructor(userInfos, activity, averageSessions, performance) {
        this.firstName = userInfos.userInfos.firstName;
        this.protein = userInfos.keyData.proteinCount;
        this.carbohydrate = userInfos.keyData.carbohydrateCount;
        this.lipid = userInfos.keyData.lipidCount;
        this.calorie = userInfos.keyData.calorieCount;
        this.userActivity = activity.sessions;
        this.userAverageSessions = averageSessions.sessions;
        this.userPerformance = performance.data || performance;
        this.userScore = Math.round(((userInfos.score || userInfos.todayScore)*100),2);
        // console.log('userScore :', this.userScore);
    }
}

export default ProfilModel;

