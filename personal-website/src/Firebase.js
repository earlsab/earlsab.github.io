import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAbOMnEzWdbiqa4OwKmx4ctXGaQcKACZk",
    authDomain: "personal-website-b35b4.firebaseapp.com",
    projectId: "personal-website-b35b4",
    storageBucket: "personal-website-b35b4.appspot.com",
    messagingSenderId: "980650264703",
    appId: "1:980650264703:web:16f4be57a69a0d57b5974a",
    measurementId: "G-H76Y4H18CG"
}
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore()
export default firebase;

