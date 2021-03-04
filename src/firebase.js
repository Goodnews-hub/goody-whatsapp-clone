import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD89fmyT1kRzBssi8wycHSzm1Terb9hqgc",
    authDomain: "goody-whatsapp-clone.firebaseapp.com",
    projectId: "goody-whatsapp-clone",
    storageBucket: "goody-whatsapp-clone.appspot.com",
    messagingSenderId: "674351986648",
    appId: "1:674351986648:web:637acddbc30b95f87aa4ad",
    measurementId: "G-7B3M7CT3W4"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;