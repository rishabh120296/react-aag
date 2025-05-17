import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div
      id="Header"
      className="flex border-solid border-black border-2 justify-between m-1"
    >
      <img className="h-40" src={LOGO_URL} />
      <div className="flex flex-wrap content-center ">
        <div className="mr-12 text-lg">
          {"Online Status:" + (onlineStatus ? "🟢" : "🔴")}
        </div>

        <Link className="mr-12 text-lg" to="/">
          Home
        </Link>
        <Link className="mr-12 text-lg" to="/grocery">
          Grocery
        </Link>
        <Link className="mr-12 text-lg" to="/about">
          About Us
        </Link>
        <Link className="mr-12 text-lg" to="/contact">
          Contact Us
        </Link>
        <button
          className="h-8 mr-2 w-20 cursor-pointer border-solid border-2 border-black bg-green-300 rounded-xl"
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
