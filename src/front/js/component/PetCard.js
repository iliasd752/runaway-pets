import axios from "axios";
import React from "react";
import petpic from "../../img/dogprofile.png";
import { PetComponent } from "./PetComponent";

export const PetCard = () => {

const userId = sessionStorage.getItem("user_id")
const token = sessionStorage.getItem("token")

const opts = {
  method: "POST",
  headers: {
    "Authorization": "bearer" + token,
  },
  body: JSON.stringify({
    user_id: userId,
  }),
  };
  fetch(process.env.BACKEND_URL + "/api/petlist", opts)
  .then((resp) => {
    if (resp.status === 200) return resp.json();
  })
  
  .catch((error) => {
    console.error("There was an error", error);
  });





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
