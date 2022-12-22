import React from "react";
import petpic from "../../img/dogprofile.png";

export const PetCard = () => {
  // const { store, actions } = useContext(Context);

  return (
    <div className="mt-5 container d-flex justify-content-left petcard align-items-center mb-4">

      <div className="col col-2 d-flex flex-column ">
        <img className="petpiccard mr-5" src={petpic}></img>
        
      </div>

      <div className="col col-6 d-flex flex-column align-items-left ml-5">
        <h2>Owner's name</h2>
        <h3>Bruno Marques</h3>
      </div>


    </div>
  );
};
