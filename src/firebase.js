// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAwc4lLSOWs0trctK1ozz6g_0ZuT-bB0PA",
    authDomain: "challenge-ab9b7.firebaseapp.com",
    projectId: "challenge-ab9b7",
    storageBucket: "challenge-ab9b7.appspot.com",
    messagingSenderId: "457997000439",
    appId: "1:457997000439:web:4c5abc487550e212d03df2",
    measurementId: "G-TKGXNH8CMQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };