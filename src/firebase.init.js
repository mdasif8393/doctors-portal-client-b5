// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyAVHsQJ2kUGp14GuIjyJMHrtwBgh_ITtJg",
    authDomain: "doctors-portal-b5.firebaseapp.com",
    projectId: "doctors-portal-b5",
    storageBucket: "doctors-portal-b5.appspot.com",
    messagingSenderId: "794660846251",
    appId: "1:794660846251:web:6b65338e1717ab0f4115ee"
  };

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;