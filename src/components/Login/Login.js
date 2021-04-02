import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import GoogleLogo from "../../images/google.png";
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";
import firebaseConfig from "./config.firebase";
import { userInfoContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userInfoContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = {
          username: displayName,
          email: email,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <Container>
        <h1 className="text-center">
          {loggedInUser.name || loggedInUser.email ? (
            <span>Welcome {loggedInUser.username}</span>
          ) : (
            <span>Login</span>
          )}
        </h1>
        <button onClick={handleGoogleSignIn} className="sign-btn">
          <div className="g-logo-holder">
            <img src={GoogleLogo} alt="Google" />
          </div>
          <div className="sign-text">Sign in with Google</div>
        </button>
      </Container>
    </div>
  );
};

export default Login;
