import React, { useContext } from "react";
import { Context } from "../store/appContext";
import petpic from "../../img/dogprofile.png";
import "../../styles/home.css";
import { useEffect } from "react";

export const FoundPet = () => {
	const { store, actions } = useContext(Context);
	const token = sessionStorage.getItem("token");
	const user = sessionStorage.getItem("user_id");
	const test = {
	  "species": "dog",
	  "name": "name"
	}
	useEffect(() => {
	  actions.petList(token, user);
	},[]);

	return (
		<div className="mt-5 container d-flex flex-column">
			
			<img className="registerbadge mb-5" src={petpic}></img>
			

			

		
				<div className="form ml-5 d-flex flex-column align-self-center text-center">
					<h1>Marley</h1>
                    <h3>{store.petlist?.species}!</h3>

                    <h3> <strong>Marley</strong> is so glad you found him!</h3>
                    <h3>His owner Bruno is really worried now and will appreciate your help.</h3>
                    <a className="purplebutton ml-auto mt-5 w-50 text-center align-self-center">Share your location with Bruno</a>
                    <a className="purplebutton ml-auto mt-3 mb-5 w-50 text-center align-self-center">Call Bruno</a>
                </div>
			
			
		
		</div>
	);
};
