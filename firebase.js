import {initializeApp} from 'firebase/app'
import {getDatabase, ref, onValue,} from 'firebase/database'
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
import 'firebase/database'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQYUjAQWa_9JKoDWitK6DgmxuEZ6sX-7w",
  authDomain: "tcc-my-aquarium-d9817.firebaseapp.com",
  projectId: "tcc-my-aquarium-d9817",
  storageBucket: "tcc-my-aquarium-d9817.appspot.com",
  messagingSenderId: "579078132327",
  appId: "1:579078132327:web:4a80b886cffc1d064f7ac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase()
const auth = getAuth(app)
const firestore = getFirestore(app)
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

export {db, ref, onValue, auth, firestore}
