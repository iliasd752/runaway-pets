import { Actions } from "@cloudinary/url-gen";
import React, { useContext, useState, useEffect } from "react";
import petpic from "../../img/dogprofile.png";
import { PetComponent } from "./PetComponent";
import { Context } from "../store/appContext";

export const PetCard = () => {
  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token")
  const user = sessionStorage.getItem("user_id")
 useEffect(()=>{actions.petList(token,user)});
 
  return (
    <div className="container d-flex flex-column mt-5 marginbottom align-items-center">

      <div>
        <h3 className="mb-5">Hello, John! Here are your best friends</h3>
      </div>
    <div className="d-flex">
      <PetComponent />
      <PetComponent />
      <PetComponent />
      <PetComponent />
     </div>

      <div>
        <a className="purplebutton" href="register-pet">Add a new pet</a>
      </div>
    </div>
  );
};
