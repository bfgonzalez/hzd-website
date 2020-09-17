import firebase from "firebase/app"
import "firebase/auth"

require("dotenv").config()

// Firebase config
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
}

// initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.auth()
