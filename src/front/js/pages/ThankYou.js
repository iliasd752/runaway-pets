import React from "react";
import dog from "../../img/couch.png";

export const ThankYou = () => {

  return (
    <div className=" container d-flex justify-content-center align-items-center mt-5">
        <div className="row">
      <div className="col col-12 col-lg-6 d-flex flex-column align-items-center">
        <img className="petpic1 img-fluid mb-5 " src={dog}></img>
      </div>

      <div className="col col-12 col-lg-6 d-flex flex-column align-items-lg-start align-items-center justify-content-center ">
        <h2>Thank you very much! </h2>
        <h3 className="text-align-center">We really appreciate your help making best friends reunite.</h3>
        <h3>!</h3>
      </div>
      </div>

    </div>
  );
};