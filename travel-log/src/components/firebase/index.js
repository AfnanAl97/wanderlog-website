import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz-PGFfBMcYTY559THHvKKzkaCcGN2TZU",
  authDomain: "upload-image-5793d.firebaseapp.com",
  projectId: "upload-image-5793d",
  storageBucket: "upload-image-5793d.appspot.com",
  messagingSenderId: "705923253563",
  appId: "1:705923253563:web:e3c5b274a4bc31647b631e",
  measurementId: "G-ESMVTTSJQX"
};

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default };




    