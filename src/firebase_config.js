import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAG8Jfehu3tsXNuqMnKNxZBXqIOXLNiioM",
    authDomain: "todoapp-f509b.firebaseapp.com",
    projectId: "todoapp-f509b",
    storageBucket: "todoapp-f509b.appspot.com",
    messagingSenderId: "332913437905",
    appId: "1:332913437905:web:88e2e7dcf7fc3f2e49a9f0"
  };

  firebase.initializeApp(firebaseConfig);

  const db= firebase.firestore();

  export {db};