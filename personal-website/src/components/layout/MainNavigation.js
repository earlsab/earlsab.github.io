import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import firebase from "../../Firebase";
import { auth } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function MainNavigation() {
  const [user] = useAuthState(auth);

  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };

    return <button className={classes.btn} onClick={signInWithGoogle}>Sign in with Google</button>;
  }

  function SignOut() {
    return (
      auth.currentUser && (
        <button className={classes.btn} onClick={() => auth.signOut()}>Sign Out</button>
      )
    );
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Sabillano</div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/wpe">wpe</Link>
          </li>
          <li>{user ? <SignOut /> : <SignIn />}</li>
        </ul>
        <div></div>
      </nav>
    </header>
  );
}

export default MainNavigation;
