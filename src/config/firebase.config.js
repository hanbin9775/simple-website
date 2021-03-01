import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const FirebaseAuth = firebase.auth();
export const firebaseStorage = firebase.storage();
