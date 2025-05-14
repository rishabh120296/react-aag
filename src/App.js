import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { AboutComponent } from "./components/About";
import ContactComponent from "./components/Contact";
import ErrorComponent from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";
import ShimerComponent from "./components/Shimer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/Grocery"));

const AppComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutComponent />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimerComponent></ShimerComponent>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

root.render(<RouterProvider router={appRoute} />);
