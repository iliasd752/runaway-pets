import React from "react";
import petpic from "../../img/dogprofile.png";

export const PetComponent = (props) => {



  return (
    <div className="container d-flex flex-column mt-5 align-items-center">
      <div className="d-flex flex-column justify-content-center petcard align-items-center mb-4 mr-4 ml-3">
        <div className="col  d-flex align-items-center justify-content-center ">
          <img className="petpiccard mr-5" src={props.image}></img>
    
        </div>

        <div className="col  d-flex flex-column align-items-center ml-5">
          <h2>{props.name}</h2>
          <h3 className="card_species">{props.species}</h3>
          <p>{props.important}</p>
          <a className="signup mb-4">See my QR Code</a>
          <a className="signup mb-4">Delete pet</a>
        </div>
      </div>
    </div>
  );
};
