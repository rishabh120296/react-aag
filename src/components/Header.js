import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div id="Header" className="header">
      <img className="header-logo" src={LOGO_URL} />
      <div className="nav-items">
        <a className="nav-text">Home</a>
        <a className="nav-text">About Us</a>
        <a className="nav-text">Cart</a>
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
