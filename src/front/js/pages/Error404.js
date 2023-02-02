import React from "react";
import dog1 from "../../img/dog1.png";

export const Error404 = () => {

  return (
    <div className="container d-flex justify-content-center align-items-center margintop">

      <div className="col col-6 d-flex flex-column align-items-center">
        <img className="petpic" src={dog1}></img>
      </div>

      <div className="col col-6 d-flex flex-column align-items-left">
        <h2>Poor boy!</h2>
        <h3>404 error - Not found</h3>
      </div>


    </div>
  );
};