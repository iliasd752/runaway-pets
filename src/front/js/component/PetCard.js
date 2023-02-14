import React, { useContext, useState, useEffect } from "react";
import { PetComponent } from "./PetComponent";
import { Context } from "../store/appContext";


export const PetCard = () => {
  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("user_id");

  useEffect(() => {
    actions.petList(token, user);
  },[]);
  if (!store){
    return null;
  }
  return (
    <div className="container d-flex flex-column mt-5 marginbottom align-items-center">
      <div>
        <h3 className="mb-1">Hello! Here are your best friends</h3>
      </div>
      <div className="container col col-12">
        {store.petList?.map((x)=><PetComponent key={x.qr_code} qrcode={x.qr_code} name={x.name} species={x.species} important={x.important} image={x.image}/>)}    
      </div>

      <div className="mt-4 mb-5">
        <a className="purplebutton mb-5 mt-4" href="register-pet">
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
