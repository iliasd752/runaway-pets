import React, { useContext, useEffect, useState } from "react";
import petpic from "../../img/dogprofile.png";
import "../../styles/home.css";
import GMaps from "../component/Location";
import { Context } from "../store/appContext";

export const Notification = () => {
	const { store, actions } = useContext(Context);
	const [petFounds, setPetFounds] = useState([]); 


	useEffect(() => {
		store.petList.filter((pet) => pet.finder_id)

			
	}, [])  


  return (
    <div className="mt-5 container d-flex flex-column">
      <img className="registerbadge mb-5" src={petpic}></img>

      <div className="form ml-5 d-flex flex-column align-self-center text-center">
        <h1>Great news!!!</h1>
        <h1>Someone just found!</h1>

        <h3>
          Call <strong>Jaussman</strong> at <strong>555 5555</strong> to set up
          a meeting.
        </h3>
        <h3 className="mt-4">
          Your best friend is in safe hands and you can find it here
        </h3>

        <div className="mapelement container">
          <GMaps className="mapelement container" />
        </div>
        <a className="purplebutton ml-auto mt-5 mb-5 w-50 text-center align-self-center">
          I have my pet back!
        </a>
      </div>
    </div>
  );
};
