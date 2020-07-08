import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCmkMDht4FL7dPxKiQWvqQgi4yOTfddzo",
    authDomain: "crud-react-fb.firebaseapp.com",
    databaseURL: "https://crud-react-fb.firebaseio.com",
    projectId: "crud-react-fb",
    storageBucket: "crud-react-fb.appspot.com",
    messagingSenderId: "257424690810",
    appId: "1:257424690810:web:1e81d0a0f30f1f6c8575c3"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

