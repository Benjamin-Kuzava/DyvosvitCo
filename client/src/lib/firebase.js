import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// From Firebase docs
const config = {
  apiKey: 'AIzaSyBFUnKDvKNeM8chOGZrM1udNdRO1RbMrHg',
  authDomain: 'dyvosit.firebaseapp.com',
  projectId: 'dyvosit',
  storageBucket: 'dyvosit.appspot.com',
  messagingSenderId: '159488537613',
  appId: '1:159488537613:web:9c69d039c13f0e6a789144',
  measurementId: 'G-TM86B58XEM'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

export { firebase, FieldValue };
