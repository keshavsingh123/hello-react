import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//JSX - HTML like syntax
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  //loggedIn value will effect all over app
  const [userName, setUserName] = useState("Admin");
  useEffect((prev) => {
    setUserName(userName);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedIn: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery />
            </Suspense>
          ),
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />,
        },
        // {
        //   path: "/restaurant/:name",
        //   element: <RestaurantMenu />,
        // },
      ],
      errorElement: <Error />,
    },
  ],
  // Added because of warning
  {
    future: {
      v7_relativeSplatPath: true, // Opt into v7 behavior for relative splats
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
