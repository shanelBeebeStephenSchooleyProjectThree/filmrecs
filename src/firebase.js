// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBxDIxeB8CwmM9nTeTthEPGK_cEUYOiMEo",
    authDomain: "filmrecs-d6491.firebaseapp.com",
    projectId: "filmrecs-d6491",
    storageBucket: "filmrecs-d6491.appspot.com",
    messagingSenderId: "238238103579",
    appId: "1:238238103579:web:96376bb1e08d753cd320be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;