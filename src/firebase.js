// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAePZr66F0FD0evPC8HLw-9budjWOs89MQ",
    authDomain: "clone-736f3.firebaseapp.com",
    projectId: "clone-736f3",
    storageBucket: "clone-736f3.appspot.com",
    messagingSenderId: "431087581997",
    appId: "1:431087581997:web:63d05ba3b15694d5dcb1a4",
    measurementId: "G-7LJKRWVZDH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth};