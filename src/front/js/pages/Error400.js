import React from "react";
import petpic from "../../img/dogprofile.png";

export const Error400 = () => {

  return (
    <div className="mt-5 container d-flex justify-content-center">

      <div className="col col-6 d-flex flex-column align-items-center">
        <img className="petpic" src={petpic}></img>
      </div>

      <div className="col col-6 d-flex flex-column align-items-left">
        <h2>Bad boy! </h2>
        <h3>400 error - Bad request</h3>
      </div>


    </div>
  );
};