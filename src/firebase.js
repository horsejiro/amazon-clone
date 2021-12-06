import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKx0pGoLCLc_lnwqOhyLt4sCXq46Vr3Fo",
    authDomain: "amz-clone-with-react.firebaseapp.com",
    projectId: "amz-clone-with-react",
    storageBucket: "amz-clone-with-react.appspot.com",
    messagingSenderId: "1050746077523",
    appId: "1:1050746077523:web:922258e8abddfe44f0e1a6",
    measurementId: "G-JM1ED2MZ53"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };