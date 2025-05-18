import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { AboutComponent } from "./components/About";
import ContactComponent from "./components/Contact";
import ErrorComponent from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import { lazy, Suspense, useContext } from "react";
import ShimerComponent from "./components/Shimer";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/Grocery"));

const AppComponent = () => {
  const { loggedInUser } = useContext(UserContext);

  const [user, setUser] = useState(loggedInUser);

  useEffect(() => {
    const data = {
      name: "Aarushi",
    };

    setUser(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: user, setUser }}>
      <div>
        <HeaderComponent />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRoute = createBrowserRouter([
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
