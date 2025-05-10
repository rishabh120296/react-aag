import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  return (
    <div id="Header" className="header">
      <img
        className="header-logo"
        src={LOGO_URL}
      />
      <div className="nav-items">
      <a className="nav-text">Home</a>
      <a className="nav-text">About Us</a>
      <a className="nav-text">Cart</a>
      </div>
    </div>
  );
};

export default HeaderComponent