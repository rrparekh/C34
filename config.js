import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCPcy8BfTOKxqBopOBx1CyCnU_YWo84pKg",
  authDomain: "willy-2-37a84.firebaseapp.com",
  projectId: "willy-2-37a84",
  storageBucket: "willy-2-37a84.appspot.com",
  messagingSenderId: "596611303422",
  appId: "1:596611303422:web:b7eaa70f57af5e2c5ce2af"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
