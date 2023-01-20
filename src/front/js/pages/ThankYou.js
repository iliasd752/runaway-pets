import React from "react";
import dog from "../../img/catdpg.png";

export const ThankYou = () => {

  return (
    <div className=" container d-flex justify-content-center align-items-center margintop">

      <div className="col col-6 d-flex flex-column align-items-center">
        <img className="petpic1" src={dog}></img>
      </div>

      <div className="col col-6 d-flex flex-column align-items-left">
        <h2>Thank you very much! </h2>
        <h3>We really appreciate your help making best friends reunite.</h3>
        <h3>!</h3>
      </div>


    </div>
  );
};