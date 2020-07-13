import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBO_OftuQnv9zGwhgLzhlz4d4Ztm9SYhRA",
    authDomain: "apkpeliculas-c9378.firebaseapp.com",
    databaseURL: "https://apkpeliculas-c9378.firebaseio.com",
    projectId: "apkpeliculas-c9378",
    storageBucket: "apkpeliculas-c9378.appspot.com",
    messagingSenderId: "926025345177",
    appId: "1:926025345177:web:edca1524e5b31097f93008"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;