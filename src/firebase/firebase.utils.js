import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4FdyNGNgVF9dLyFBO2gm-GIVmLqxii9o",
    authDomain: "shop-db-348d0.firebaseapp.com",
    projectId: "shop-db-348d0",
    storageBucket: "shop-db-348d0.appspot.com",
    messagingSenderId: "969386493523",
    appId: "1:969386493523:web:03838cd4af4218b46828a6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
