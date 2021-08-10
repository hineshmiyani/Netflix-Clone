// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAhCDvUw3lASZbrq8puOpWpDlaOEbjIboE",
  authDomain: "netflix-clone-9dd66.firebaseapp.com",
  projectId: "netflix-clone-9dd66",
  storageBucket: "netflix-clone-9dd66.appspot.com",
  messagingSenderId: "855216914603",
  appId: "1:855216914603:web:b9aa83d9d291d932d677ee",
  measurementId: "G-0NTPWE7WYP",
};


const firebaseApp = firebase.initializeApp(firebaseConfig); //Intialize App 
const db = firebaseApp.firestore(); // realtime database
const auth = firebase.auth(); // for authentication

export default db;
export { auth };

//site link:- https://netflix-clone-9dd66.web.app