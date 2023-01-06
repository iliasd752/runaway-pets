import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { RegisterPet } from "./pages/RegisterPet";
import { PetProfile } from "./pages/PetProfile";
import { FinderInfo } from "./pages/FinderInfo";
import { Notification } from "./pages/Notification";
import { PetCard } from "./component/PetCard";
import { NewNav } from "./component/NewNav";

import { RegisterUser } from "./pages/RegisterUser";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register-pet",
      element: <RegisterPet />,
    },
    {
      path: "/register-user",
      element: <RegisterUser />,
    },
    {
      path: "/pet-profile",
      element: <PetProfile />,
    },
    {
      path: "/finder-info",
      element: <FinderInfo />,
    },
  ]);

  return (
    <div>
      <NewNav />
      <RouterProvider router={router} />
    </div>
  );
};

export default injectContext(Layout);
