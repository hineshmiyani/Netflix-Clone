// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA84mA2hMrI_w4p2fy7Z2qtOFS1TxLSGeY",
  authDomain: "netflix-clone-1008-63850.firebaseapp.com",
  projectId: "netflix-clone-1008-63850",
  storageBucket: "netflix-clone-1008-63850.appspot.com",
  messagingSenderId: "927228798205",
  appId: "1:927228798205:web:e1e72b28a5cc92d10dca94",
  measurementId: "G-F0XLGQ48YG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //Intialize App
const db = firebaseApp.firestore(); // realtime database
const auth = firebase.auth(); // for authentication

export default db;
export { auth };
