
class ProfilModel {
    constructor( mainData, activity, averageSessions, data) {
        this.firstName = mainData.userInfos.firstName;
        this.lastName = mainData.userInfos.lastName;
        this.age = mainData.userInfos.age;
        this.score = mainData.score;
        this.protein = mainData.keyData.proteinCount;
        this.carbohydrate = mainData.keyData.carbohydrateCount;
        this.lipid = mainData.keyData.lipidCount;
        this.calorie = mainData.keyData.calorieCount;
        this.activity = activity.sessions;
        this.averageSessions = averageSessions.sessions;
        this.performance = performance.data;
    } 
}

export default ProfilModel;
