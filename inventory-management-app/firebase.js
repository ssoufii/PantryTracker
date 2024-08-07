// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADsARlt-jailCu6NtOLiRtrZdHO9b9EF8",
  authDomain: "pantry-tracker-1cd3a.firebaseapp.com",
  projectId: "pantry-tracker-1cd3a",
  storageBucket: "pantry-tracker-1cd3a.appspot.com",
  messagingSenderId: "752199321246",
  appId: "1:752199321246:web:c42f3a7c2db7fa29f75d8f",
  measurementId: "G-Z4SF4ZVYG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const firestore = getFirestore(app)


export {app, firestore}
