import React from "react";
import ReactDOM from "react-dom/client";  
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));


const AppComponent = () => {
  return (
    <div>
      <HeaderComponent/>
      <BodyComponent />
    </div>
  );
};

root.render(<AppComponent />);
