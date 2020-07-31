import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL:process.env.DATA_BASE_URL,
  projectId:process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASEREMENT_ID
}
const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(config);
const emailAuth = new firebase.auth.EmailAuthProvider();
const db = app.firestore();
export { app, emailAuth, db }
