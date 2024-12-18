import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./componets/Home";
import Contact from "./pages/Contact";
import Food from "./pages/Food";
import Franchise from "./pages/Franchise";
import Login from "./pages/Login";
import Applayout from "./pages/Applayout";
import Registration from "./pages/Registration";
import Addproduct from "./pages/Addproduct";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/food",
          element: <Food />,
        },
        {
          path: "/franchise",
          element: <Franchise />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },{
          path:"/registration",
          element:<Registration/>
        },{
          path:"/Addproduct",
          element:<Addproduct/>
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
