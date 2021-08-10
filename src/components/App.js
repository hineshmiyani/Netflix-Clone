import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "../features/userSlice";
import "../css/App.css";

function App() {
  // useSelector Hooks :- https://react-redux.js.org/api/hooks#useselector
  // Allows you to extract data from the Redux store state, using a selector function.
  const user = useSelector(selectUser); // give us user back

  // useDispatch Hooks :- https://react-redux.js.org/api/hooks#usedispatch
  const dispatch = useDispatch();

  //manage user login state

  useEffect(() => {
    //Its listen when any authenticated state change
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User Logged In
        // It's push the user info in the  store
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // User Logged Out
        dispatch(logout()); // It's going to reset the user back to null
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {/* if there's no user then render login screen 
        otherwise render rest of the app. */}

        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
