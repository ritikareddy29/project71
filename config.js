import firebase from "firebase";
require("@firebase/firestore");

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZ2OBvFytNhh2P5fpthmAkYWRZv_eYV_c",
  authDomain: "project-71-53e88.firebaseapp.com",
  projectId: "project-71-53e88",
  storageBucket: "project-71-53e88.appspot.com",
  messagingSenderId: "832619565307",
  appId: "1:832619565307:web:5a9f15fff792b31dfda05e"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
