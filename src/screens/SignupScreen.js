import React, { useEffect, useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {
  // useRef hook:- https://reactjs.org/docs/hooks-reference.html#useref
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  //singUp or Register
  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //singIn
  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>

        <h4>
          <span className="signupScreen_grey">New to Netflix? </span>
          <span onClick={register} className="signupScreen_link">
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
