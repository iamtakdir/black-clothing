import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAqrv0owYi9sWqMqPnNxAnFswQdnLHbbME",
  authDomain: "test-57919.firebaseapp.com",
  databaseURL: "https://test-57919.firebaseio.com",
  projectId: "test-57919",
  storageBucket: "test-57919.appspot.com",
  messagingSenderId: "478798477781",
  appId: "1:478798477781:web:07743c8c16ba85fa37a55c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//DB

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  //userDocRef a new instance of doc class which has eveything for interecting with firebase
  const userDocRef = doc(db, "users", userAuth.uid);

  //Getting users
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  // saving users

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error in creating users", error.message);
    }
  }

  return userDocRef;
};
