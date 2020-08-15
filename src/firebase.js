import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyAMxkc8JyFrM6kt_mvaA2CLCZswRYk9tLE",
    authDomain: "facebook-messenger-clone-67aef.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-67aef.firebaseio.com",
    projectId: "facebook-messenger-clone-67aef",
    storageBucket: "facebook-messenger-clone-67aef.appspot.com",
    messagingSenderId: "1029530667487",
    appId: "1:1029530667487:web:fa1bfc18a602f7e5549c6a",
    measurementId: "G-CWVYYNL6LP"
      
});

const db = firebaseApp.firestore();

export default db;