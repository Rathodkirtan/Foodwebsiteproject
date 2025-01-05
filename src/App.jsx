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
import SideBar from "./Admin/SideBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashbord from "./Admin-page/Dashbord.jsx";
import User from "./Admin-page/User";
import Cart from "./Admin-page/Cart.jsx";
import Profile from "./Admin-page/Profile";
import Order from "./Admin-page/Order";
import Layout from "./Admin-page/layout.jsx";
import Franchi from "./Admin-page/Franchise.jsx";
import Contactus from "./Admin-page/Contact.jsx";

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
        },
        {
          path: "/registration",
          element: <Registration />,
        },
        {
          path: "/Addproduct",
          element: <Addproduct />,
        },
      ],
    },
    {
      path: "/admin",
      element: <Layout />,
      children:[
        {
          path:"/admin/dashbord",
          element:<Dashbord/>
        },
        {
          path:"/admin/user",
          element:<User/>
        },{
          path:"/admin/contact",
          element:<Contactus/>
        },{
          path:"/admin/franchise",
          element:<Franchi/>
        },{
          path:"/admin/cart",
          element:<Cart/>
        },{
          path:"/admin/profile",
          element:<Profile/>
        },{
          path:"/admin/order",
          element:<Order/>
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
