import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import withFirebaseAuth from "react-with-firebase-auth"

// TODO: Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAosC91QiB6rtFq5J-JBq1CVzUVSCsCvbM",
  authDomain: "trends-a4.firebaseapp.com",
  projectId: "trends-a4",
  storageBucket: "trends-a4.appspot.com",
  messagingSenderId: "75936914244",
  appId: "1:75936914244:web:d2f77380bdf6cf2cd15511",
  measurementId: "G-PHTVT5MYMD",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

const providers = {
  googleProvider: new GoogleAuthProvider(),
}

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
})

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider)
}

export { auth, db, createComponentWithAuth, signInWithGoogle }
