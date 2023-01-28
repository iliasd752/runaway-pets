import React, { useContext, useEffect, useState } from "react";
import petpic from "../../img/dogprofile.png";
import "../../styles/home.css";
import GMaps from "../component/Location";
import { Context } from "../store/appContext";
export const FoundComponent = (props) => {
  const { store, actions } = useContext(Context);
  const [petFounds, setPetFounds] = useState([]);
  // // console.log("my props", props);

  return (
    <div className="mt-5 container d-flex flex-column foundpetcard">
      <img className="registerbadge mb-5" src={petpic}></img>
      <div className="form ml-5 d-flex flex-column align-self-center text-center">
        <h3>
          Call <strong>{props.name}</strong> at <strong>{props.phone}</strong>{" "}
          to set up a meeting.
        </h3>
        <h3 className="mt-4">{props.petName}</h3>
        <div className="mapelement container">
          <GMaps
            className="mapelement container"
          />
        </div>
        <a className="purplebutton ml-auto mt-5 mb-5 w-50 text-center align-self-center">
          I have my pet back!
        </a>
      </div>
    </div>
  );
};
