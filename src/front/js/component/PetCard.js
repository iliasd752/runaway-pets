import { Actions } from "@cloudinary/url-gen";
import React, { useContext, useState, useEffect } from "react";
import petpic from "../../img/dog.png";
import { PetComponent } from "./PetComponent";
import { Context } from "../store/appContext";


export const PetCard = () => {
  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("user_id");
  const test = {
    "species": "dog"
  }
  useEffect(() => {
    actions.petList(token, user);
  },[]);

  return (
    <div className="container d-flex flex-column mt-5 marginbottom align-items-center">
      <div>
        <h3 className="mb-5">Hello, John! Here are your best friends</h3>
      </div>
      <div className="container col col-12">
        {store && store.petList?.map((x)=><PetComponent key={x.qr_code} name={x.name} species={x.species} important={x.important} image={x.image}/>)}    
      </div>

      <div>
        <a className="purplebutton" href="register-pet">
          Add a new pet
        </a>
      </div>


      {/* MODAL */}

      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
    
    </div>
    </div>
  );
};
