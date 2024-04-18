# Sportsee

## Scénario

- Présentation

## Plan

- choix de la librairie
- la structure du code
- le fonctionalités du site
- le l'affichage des composants
- mise en place de l'api (Application Programming Interface)

### recharts

- [choix de la librairie : recharts](https://recharts.org/en-US/api/BarChart)

#### Structure du code

- [routes](./frontend/src/App.js)

- [Layout](./frontend/src/components/Layout/Layout.js)

  - [Header](./frontend/src/components/Header.js)
  - [SideBar](./frontend/src/components/SideBar.js)

- Pages

  - [Error](./frontend/src/pages/Error.js)
  - [display error](http://localhost:3001/error)
  - [Home](./frontend/src/pages/Home.js)
  - [display home](http://localhost:3001/)
  - [User](./frontend/src/pages/User.js)

- Composants

  - [composants](./frontend/src/components/)

- API : Application Programming Interface
  - [ProfilModel](./frontend/src/utils/ProfilModel.js)
  - [ProfilRequest](./frontend/src/utils/profileRequest.js)
  - [dossier getDataMocked](./frontend/src/utils/getDataMocked/)

#### fonctionalités du site

- Responsive
- tests
  - [le service](./frontend/src/utils/profileRequest.js)
  - [si l'url n'est pas bon (ex : l'id n'est pas bon)](http://localhost:3001/user/13)
  - [si j'accède bien au profil de Karl](http://localhost:3001/user/12)
  - [si j'accède bien au profil de Cécilla](http://localhost:3001/user/18)
  - [on se trompe de saisie et on saisie l'id suivi d'une chaine de caractères](http://localhost:3001/user/12ngkelrqng)

#### l'affichage des composants

- Affichage du prénom :

  - [userInfos](./frontend/src/components/UserInfos.js)
  - [firstName](./frontend/src/mock/dataMocked.js)

- Affichage des calories, des protéines, des glucides, des lipides :
- [composants réutilisables : keyData](./frontend/src/components/KeyData.js)

- Affichage de l'activité

  - [recharts : Barchart](./frontend/src/components/BarChart.js):

- Affichage de la durée moyennne de sessions

  - [recharts : LineChart](./frontend/src/components/AverageSessions.js)

- Affichage du score
- [profilModel : userScore](./frontend/src/utils/ProfilModel.js)

#### mise en place de l'api (Application Programming Interface)

- [profilModel.js](./frontend/src/utils/ProfilModel.js)
- [User.js](./frontend/src/pages/User.js)
- [profileRequest.js](./frontend/src/utils/profileRequest.js)
- [getDataMocked](./frontend/src/utils/getDataMocked/)
  - [Activité](./frontend/src/utils/getDataMocked/getActivityMocked.js)
  - [userInfos](./frontend/src/utils/getDataMocked/getInfosMocked.js)
  - [averagesSessions](./frontend/src/utils/getDataMocked/getAverageSessionsMocked.js)
  - [performances](./frontend/src/utils/getDataMocked/getPerformanceMocked.js)
  - [scores](./frontend/src/utils/ProfilModel.js)
