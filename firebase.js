import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDH39vOss8_n0mCadzgwIXoElbsruw-vbA",
    authDomain: "mywhatsapp-2.firebaseapp.com",
    projectId: "mywhatsapp-2",
    storageBucket: "mywhatsapp-2.appspot.com",
    messagingSenderId: "986740323879",
    appId: "1:986740323879:web:f0cc0e5b4c22395a014002",
    measurementId: "G-T56NZLGMW1"
  };

  const app = !firebase.apps.length 
   ? firebase.initializeApp(firebaseConfig) 
   : firebase.app();


   const db = app.firestore();
   const auth = app.auth();
   const provider = new firebase.auth.GoogleAuthProvider();

   export {db,auth,provider};