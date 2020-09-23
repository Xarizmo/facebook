import firebase from 'firebase';

const FIREBASE_APIKEY = process.env.REACT_APP_FIREBASE_APIKEY;
const FIREBASE_AUTHDOMAIN = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const FIREBASE_DATABASEURL = process.env.REACT_APP_FIREBASE_DATABASEURL;
const FIREBASE_PROJECTID = process.env.REACT_APP_FIREBASE_PROJECTID;
const FIREBASE_STORAGEBUCKET = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const FIREBASE_MESSAGINGSENDERID = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;
const FIREBASE_APPID = process.env.REACT_APP_FIREBASE_APPID;
const FIREBASE_MEASUREMENTID = process.env.REACT_APP_FIREBASE_MEASUREMENTID;

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  databaseURL: FIREBASE_DATABASEURL,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGINGSENDERID,
  appId: FIREBASE_APPID,
  measurementId: FIREBASE_MEASUREMENTID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;