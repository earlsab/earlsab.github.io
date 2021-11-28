import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import firebase from "../../Firebase";
import { auth } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import logo from "../../extra/website-logo.png";
function MainNavigation() {
  const [user] = useAuthState(auth);

  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };

    return (
      <button className={classes.btn} onClick={signInWithGoogle}>
        sign in
      </button>
    );
  }

  function SignOut() {
    return (
      auth.currentUser && (
        <button className={classes.btn} onClick={() => auth.signOut()}>
          sign out
        </button>
      )
    );
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <img src={logo} alt="Logo" width="50em" />
      </Link>
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
