import React from "react";
import petpic from "../../img/dogprofile.png";

export const PetProfile = () => {
  // const { store, actions } = useContext(Context);

  return (
    <div className="mt-5 container d-flex justify-content-center">

      <div className="col col-6 d-flex flex-column align-items-center">
        <img className="petpic" src={petpic}></img>
        <h1>Bingo</h1>
        <h3>Dog</h3>
      </div>

      <div className="col col-6 d-flex flex-column align-items-left">
        <h2>Owner's name</h2>
        <h3>Bruno Marques</h3>
        <h2>Owner's phone number</h2>
        <h3>+351 555 5555</h3>
        <h2>Owner's address</h2>
        <h3>Ocean Drive 351</h3>
        <h2>Important info</h2>
        <h3>Never feed him after midnight. Never wet him.</h3>
      </div>


    </div>
  );
};
