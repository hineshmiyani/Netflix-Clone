import React, { useState } from "react";
import SignupScreen from "./SignupScreen";
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_backGround">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix_logo"
          className="loginScreen_logo"
        />

        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sign In
        </button>

        <div className="loginScreen_gradient"></div>

        {/* change SignupScreen position styling if signIn  equal to true. */}
        <div
          className="loginScreen_body"
          style={signIn ? { top: "21%" } : null}
        >
          {signIn ? (
            <SignupScreen />
          ) : (
            <div>
              <h1>Unlimited films, TV programmes and more.</h1>

              <h2>Watch anywhere. Cancel at any time.</h2>

              <h3>
                Ready to watch? Enter your email to create or restart your
                memebership.
              </h3>

              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen_getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
