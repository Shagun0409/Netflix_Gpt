// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvCi6zyfhrnFbCEV2aN-KRzc2oxMxtE9M",
  authDomain: "netflixgpt-9beae.firebaseapp.com",
  projectId: "netflixgpt-9beae",
  storageBucket: "netflixgpt-9beae.firebasestorage.app",
  messagingSenderId: "904042468742",
  appId: "1:904042468742:web:9fe0645a196957cf19c807",
  measurementId: "G-MBVB7S4EM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();
export {auth};