// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-oGf5wBc8Bt7w4EDgj7H6aF4jW7oSPSE",
  authDomain: "hotel-mehbub.firebaseapp.com",
  projectId: "hotel-mehbub",
  storageBucket: "hotel-mehbub.appspot.com",
  messagingSenderId: "758964598340",
  appId: "1:758964598340:web:9746cb46fd5767c97cee11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;