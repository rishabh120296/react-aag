import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
  return (
    <div id="Header" className="flex-class-1">
      <img
        className="img-logo"
        src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?semt=ais_hybrid&w=740"
      />
      <div className="flex-class-2">
      <a className="margin">Home</a>
      <a className="margin">About Us</a>
      <a className="margin">Cart</a>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="food-img"
        src="https://vismaifood.com/storage/app/uploads/public/6cb/0df/a6f/thumb__700_0_0_0_auto.jpg"
      />
      <div id="name">Meghna Biryani</div>
      <div id="Rating">4.0</div>
      <div id="time">30 mins</div>
    </div>
  );
};

const BodyComponent = () => {
  return (
  <div className="flex-class-3">
  <RestaurantCard />
  <RestaurantCard />
  <RestaurantCard />
  <RestaurantCard />
  <RestaurantCard />
  <RestaurantCard />
  <RestaurantCard />
  <RestaurantCard />
  <RestaurantCard />
  <RestaurantCard />
  </div>

  )
};

const AppComponent = () => {
  return (
    <div>
      <HeaderComponent/>
      <BodyComponent />
    </div>
  );
};

root.render(<AppComponent />);
