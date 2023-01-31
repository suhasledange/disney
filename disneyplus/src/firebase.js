// VUE_APP_FIREBASE_API_KEY='AIzaSyBrHJBByHC7VEZvF_DmFrASkFLfOT2jB8Q'
// VUE_APP_FIREBASE_AUTH_DOMAIN='rnfirebaseauth-8c0d3.firebaseapp.com'
// VUE_APP_FIREBASE_PROJECT_ID='rnfirebaseauth-8c0d3'
// VUE_APP_FIREBASE_STORAGE_BUCKET='rnfirebaseauth-8c0d3.appspot.com'
// VUE_APP_FIREBASE_MESSAGING_SENDER_ID='122598877398'
// VUE_APP_FIREBASE_APP_ID='1:122598877398:web:73519bb4ab8ee0b16c0177'
// VUE_APP_TMDB_API_KEY='c04229b243150afc8110c3e5a45344ec'



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: 'AIzaSyBKcoE32BlFeffE6sjlCgKR5v37KFVTwGg',
    authDomain: 'disneyplus-2b68c.firebaseapp.com',
    projectId: 'disneyplus-2b68c',
    storageBucket: 'disneyplus-2b68c.appspot.com',
    messagingSenderId: '55512103767',
    appId: '1:55512103767:web:2b41b0fccb0d831ae71c12',
    measurementId: 'G-EG5QMXCPS5',
    
  };
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();
export { auth ,provider,storage};
export default db;