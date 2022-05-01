// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt9U-xWfjrT-llIh6lKk-d45Z3jIiuS2E",
  authDomain: "rideriot-bfdd0.firebaseapp.com",
  projectId: "rideriot-bfdd0",
  storageBucket: "rideriot-bfdd0.appspot.com",
  messagingSenderId: "307190435477",
  appId: "1:307190435477:web:b625e98a9c16817792159c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;