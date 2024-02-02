
class ProfilModel {
    constructor( mainData, activity, averageSessions, performance) {
        this.firstName = mainData.userInfos.firstName;
        this.lastName = mainData.userInfos.lastName;
        this.age = mainData.userInfos.age;
        this.todayScore = mainData.score;
        this.protein = mainData.keyData.proteinCount;
        this.carbohydrate = mainData.keyData.carbohydrateCount;
        this.lipid = mainData.keyData.lipidCount;
        this.calorie = mainData.keyData.calorieCount;
        this.activity = activity;
        this.averageSession = averageSessions;
        this.performance = performance;
    } 
}

export default ProfilModel;
