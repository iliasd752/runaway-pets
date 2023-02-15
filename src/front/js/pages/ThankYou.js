import React from "react";
import dog from "../../img/couch.png";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const ThankYou = () => {
  const { store, actions } = useContext(Context);

  const test = store.findUser.name;
  // console.log(test)

  return (
    <div className=" container d-flex justify-content-center align-items-center mt-5">
      <div className="row">
        <div className="col col-12 col-lg-6 d-flex flex-column align-items-center">
          <img className="petpic1 img-fluid mb-5 " src={dog}></img>
        </div>

        <div className="col col-12 col-lg-6 d-flex flex-column align-items-lg-start align-items-center justify-content-center ">
          <h1>You have no lost pets! </h1>
          <h3 className="text-align-center thankyou">
            We hope you never have to go through it,<br></br> but if any of your pets get lost at any time, you'll be notified and they will show up here.
          </h3>
        </div>
      </div>
    </div>
  );
};
