import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
    apiKey: "xxxxxxxxxxxxxxxxx",
    authDomain: "facebook-messenger-clone-xxxxx.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-xxxxxx.firebaseio.com",
    projectId: "facebook-messenger-clone-xxxxxx",
    storageBucket: "facebook-messenger-clone-xxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxx",
    appId: "1:xxxxxxxxxx:web:xxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxx"
      
});

const db = firebaseApp.firestore();

export default db;
