// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_NOT_SECRET_apiKey,
//     authDomain: process.env.REACT_APP_NOT_SECRET_authDomain,
//     projectId: process.env.REACT_APP_NOT_SECRET_projectId,
//     storageBucket: process.env.REACT_APP_NOT_SECRET_storageBucket,
//     messagingSenderId: process.env.REACT_APP_NOT_SECRET_messagingSenderId,
//     appId: process.env.REACT_APP_NOT_SECRET_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJstLdZo6sN6YhpDGYpA4wE6x3EEu620I",
    authDomain: "portfolio-5af81.firebaseapp.com",
    projectId: "portfolio-5af81",
    storageBucket: "portfolio-5af81.appspot.com",
    messagingSenderId: "137699240950",
    appId: "1:137699240950:web:6374e289a5d805209bf5d7",
    measurementId: "G-KTNNLHLKBB"
};

const app = initializeApp(firebaseConfig);
export default app;