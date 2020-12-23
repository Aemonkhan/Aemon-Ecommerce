import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBNT7w8vIu2RUmiHo-bxsInl03gFziKtqw",
    authDomain: "ecommercewebapp-192c0.firebaseapp.com",
    projectId: "ecommercewebapp-192c0",
    storageBucket: "ecommercewebapp-192c0.appspot.com",
    messagingSenderId: "342176037535",
    appId: "1:342176037535:web:61f0ebf1b350779adc80aa",
    measurementId: "G-5TC2TCW2FD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 const auth =firebase.auth();
 const db = firebase.firestore();
 const storage = firebase.storage();

 export {auth,db,storage}
