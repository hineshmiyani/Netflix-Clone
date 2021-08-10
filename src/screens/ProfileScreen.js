import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../components/Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen_body">
        <h1>Edit Profile</h1>

        <div className="profileScreen_info">
          <img
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Netflix Avatar"
          />

          <div className="profileScreen_details">
            {/* fetch email from redux user store that we push in App.js by using useDispatch hook  */}
            <h2>{user.email}</h2>

            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <button onClick={() => auth.signOut()} className="profileScreen_singOut">Sign Out</button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfileScreen;
