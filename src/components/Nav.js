import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  // useSelector Hooks :- https://reactrouter.com/web/api/Hooks/usehistory
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    // clean-up
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    // Below, if show equal to "true" only that  "nav_black" class added
    <div className={`nav ${show && "nav_black"}`}>
      <img
        onClick={() => history.push("/")}
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="nav_logo"
      />

      <img
        onClick={() => history.push("/profile")}
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix Avatar"
        className="nav_avatar"
      />
    </div>
  );
}

export default Nav;
