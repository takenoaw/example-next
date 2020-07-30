import * as firebase from 'firebase/app'
import 'firebase/auth'

// let app ={}
// try {
//   const config = {
//     apiKey: "AIzaSyDudDeBzA_TDTcBl0ULwNGvsm7EroQn_30",
//     authDomain: "example-nextjs.firebaseapp.com",
//     databaseURL: "https://example-nextjs.firebaseio.com",
//     projectId: "example-nextjs",
//     storageBucket: "example-nextjs.appspot.com",
//     messagingSenderId: "504976824205",
//     appId: "1:504976824205:web:612c6665744646de750fc4",
//     measurementId: "G-8XLBR432BZ"
//   }
//   app = firebase.initializeApp(config);
// } catch (error) {
//   app =firebase.app()
//   console.log('catch')
//   if (!/already exist/.test(error.message)) {
//     console.error('Firebase initialization error', error.stack);
//   }
// }
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

export { app, emailAuth }
