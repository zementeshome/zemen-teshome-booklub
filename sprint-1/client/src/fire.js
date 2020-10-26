import firebase from 'firebase';
import 'firebase/firestore';
// import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCteInkX1DhuFOQRCRY1ZL26VIhE6StpcY",
    authDomain: "booklub-capstone.firebaseapp.com",
    databaseURL: "https://booklub-capstone.firebaseio.com",
    projectId: "booklub-capstone",
    storageBucket: "booklub-capstone.appspot.com",
    messagingSenderId: "823089345089",
    appId: "1:823089345089:web:120d46b919ae1eca608cc0",
    measurementId: "G-MLY6FSZQZB"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const db = fire.firestore();
  export const auth = firebase.auth();

  export default fire;
  