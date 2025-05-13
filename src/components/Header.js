import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div id="Header" className="header">
      <img className="header-logo" src={LOGO_URL} />
      <div className="nav-items">
        <Link className="nav-text" to="/">
          Home
        </Link>
        <Link className="nav-text" to="/about">
          About Us
        </Link>
        <Link className="nav-text" to="/contact">
          Contact Us
        </Link>
        <button
          className="login-btn"
          onClick={() => {
            console.log("clicked");

            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
