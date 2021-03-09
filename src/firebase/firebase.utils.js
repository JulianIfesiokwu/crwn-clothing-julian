import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDpRLedfJuC6xjGrhpg2mNaP042Dk890Fs",
    authDomain: "crown-clothing-db-3b2ba.firebaseapp.com",
    projectId: "crown-clothing-db-3b2ba",
    storageBucket: "crown-clothing-db-3b2ba.appspot.com",
    messagingSenderId: "475565401728",
    appId: "1:475565401728:web:fe6570ad2aa0e5a0bce865",
    measurementId: "G-2G0F0VVQS2"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.id}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;