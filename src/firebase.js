/** @format */

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAXIFNad7gAOf-sTzgW6SoAFb5_sv0TB5I',
  authDomain: 'seolstagram-70734.firebaseapp.com',
  projectId: 'seolstagram-70734',
  storageBucket: 'seolstagram-70734.appspot.com',
  messagingSenderId: '778692887130',
  appId: '1:778692887130:web:31c7bba6be23980fc3ce63',
  measurementId: 'G-YEN2J5H46G',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
