// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_y2yg811zVik7Uzk7hUgO7Z0iFfE_H2E",
  authDomain: "techincubator-5b340.firebaseapp.com",
  databaseURL: "https://techincubator-5b340-default-rtdb.firebaseio.com",
  projectId: "techincubator-5b340",
  storageBucket: "techincubator-5b340.appspot.com",
  messagingSenderId: "73771252409",
  appId: "1:73771252409:web:36dbdb7ca7ed3008a17968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default firebaseConfig;