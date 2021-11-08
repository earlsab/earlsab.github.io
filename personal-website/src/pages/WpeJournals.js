import { Link } from "react-router-dom";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// ayayay no need to hide firebase's apiKey. Been stuck on this for a while.
firebase.initializeApp({
  apiKey: "AIzaSyDAbOMnEzWdbiqa4OwKmx4ctXGaQcKACZk",
  authDomain: "personal-website-b35b4.firebaseapp.com",
  projectId: "personal-website-b35b4",
  storageBucket: "personal-website-b35b4.appspot.com",
  messagingSenderId: "980650264703",
  appId: "1:980650264703:web:16f4be57a69a0d57b5974a",
  measurementId: "G-H76Y4H18CG",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function WpeJournalsPage() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <section>
        {user ? <WpeJournalsLogedInPage /> : <WpeJournalsSignedOutPage />}
      </section>
      <Link to="/">Back</Link>
    </div>
  );
}

function WpeJournalsSignedOutPage() {
  return (
    <div>
      Signed Out -- This hides all the information and shows a "lock" icon
      <SignIn />
    </div>
  );
}

function WpeJournalsLogedInPage() {
  return (
    <div>
      WPE Journal Page (Signed In) This part shows the WPE Journals if the user is a Sillimanian
      <SignOut />
    </div> 
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

export default WpeJournalsPage;
