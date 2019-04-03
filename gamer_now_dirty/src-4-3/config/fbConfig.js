import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBzc1z-bNfvleXXD1_UJp_A7UCs378iRa4",
    authDomain: "gamer-now.firebaseapp.com",
    databaseURL: "https://gamer-now.firebaseio.com",
    projectId: "gamer-now",
    storageBucket: "gamer-now.appspot.com",
    messagingSenderId: "968559219820"
  };

  firebase.initializeApp(config);
  //firebase.firestore().settings({ timestampsInSnapshot: true })
  //the line above was in the tutorials but threw errors to me, idk what to do with it

  export default firebase;