import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";


import { Home } from "./pages/home";
import injectContext from "./store/appContext";


import { RegisterPet } from "./pages/RegisterPet";
import { PetProfile } from "./pages/PetProfile";
import { FinderInfo } from "./pages/FinderInfo";
import { PetCard } from "./component/PetCard";
import { NewNav } from "./component/NewNav";
import { Settings } from "./pages/Settings";
import { PetComponent } from "./component/PetComponent";
import { RegisterUser } from "./pages/RegisterUser";
import { Error404 } from "./pages/Error404";
import { Error400 } from "./pages/Error400";

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
    {
      path: "/pet-card",
      element: <PetCard />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "pet-component",
      element: <PetComponent />,
    },
    {
      path: "/error404",
      element: <Error404 />,
    },
    {
      path: "error400",
      element: <Error400 />,
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
