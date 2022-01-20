// import firebase from 'firebase/auth';

// import "firebase/auth"
// // TODO: Replace the following with your app's Firebase project configuration
    
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDpUXbEBVQRwZF9vbsEOqel5fiCreTzUbQ",
//     authDomain: "ytclone-react.firebaseapp.com",
//     projectId: "ytclone-react",
//     storageBucket: "ytclone-react.appspot.com",
//     messagingSenderId: "733658274135",
//     appId: "1:733658274135:web:af5e8070fc946a06960612",
//     measurementId: "G-VNWVD2JL8B"
//   };

// firebase.initializeAuth(firebaseConfig);

// export default firebase.auth();


import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpUXbEBVQRwZF9vbsEOqel5fiCreTzUbQ",
    authDomain: "ytclone-react.firebaseapp.com",
    projectId: "ytclone-react",
    storageBucket: "ytclone-react.appspot.com",
    messagingSenderId: "733658274135",
    appId: "1:733658274135:web:af5e8070fc946a06960612",
    measurementId: "G-VNWVD2JL8B"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);