import React from "react";
import dog from "../../img/sleepy.png";

export const Error400 = () => {

  return (
    <div className=" container d-flex justify-content-center align-items-center margintop">

      <div className="col col-6 d-flex flex-column align-items-center">
        <img className="petpic1" src={dog}></img>
      </div>

      <div className="col col-6 d-flex flex-column align-items-left">
        <h2>Bad boy! </h2>
        <h3>400 error - Bad request</h3>
      </div>


    </div>
  );
};