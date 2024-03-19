
// import axios from "axios";
// import { redirect } from 'react-router-dom';


// const api = axios.create({
//     baseURL: `http://localhost:3000`,
// });
// console.log('api', api);
// /**
//  * Retrieve user activity
//  * @param {string} id
//  * @returns {Array}
//  */
// export const getUserActivity = async (id) => {
//     try {
//         const res = await api.get(`http://localhost:3000/user/:${id}/activity`);
//         return res.data;
//     } catch (e) {
//         console.log(e);
//     }
// };

// /**
//  * Get User Infos
//  * @param {string} id
//  * @returns {object}
//  */

// export const getUserInfos = async (id) => {
//     try {
//         const res = await api.get(`http://localhost:3000/user/${id}`);
//         return res.json();
//     } catch (e) {
//         console.log(e);
//     }
// };

// /**
//  * Get User Performance
//  * @param {string} id
//  * @returns {object}
//  */

// export const getUserPerformance = async (id) => {
//     try {
//         const res = await api.get(`http://localhost:3000/user/${id}/performance`);
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// };
// /**
//  * Get User Average Session
//  * @param {string} id
//  * @returns {object}
//  */

// export const getUserAverageSessions = async (id) => {
//     try {
//         const res = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
//         return res.data;
//     } catch (e) {
//         console.log(e);
//     }
// }; 

// export default async function fetchUserData(id) {
//     const response = await fetch(`http://localhost:3000/user/${id}`);
//     if (!response.ok) {
//         throw new Error('Failed to fetch user data');
//     }
//     return redirect('/');
// }