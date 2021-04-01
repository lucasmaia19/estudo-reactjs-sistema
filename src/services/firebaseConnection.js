import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


let firebaseConfig = {
  apiKey: "AIzaSyA0wGl9eTrGPM5OPDy1aVhlAjtHlE4Qrrs",
  authDomain: "sistema-ce77e.firebaseapp.com",
  projectId: "sistema-ce77e",
  storageBucket: "sistema-ce77e.appspot.com",
  messagingSenderId: "918732037562",
  appId: "1:918732037562:web:b375f9bb86237fd3ef9183",
  measurementId: "G-XC6D98LVKM"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;