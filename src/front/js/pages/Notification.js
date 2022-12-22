import React, { useContext } from "react";
import { Context } from "../store/appContext";
import petpic from "../../img/dogprofile.png";
import "../../styles/home.css";

export const Notification = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div className="mt-5 container d-flex flex-column">
			
			<img className="registerbadge mb-5" src={petpic}></img>
			

			

		
				<div className="form ml-5 d-flex flex-column align-self-center text-center">
					<h1>Great news!!!</h1>
                    <h1>Someone just found Bingo!</h1>

                    <h3>Call <strong>Jaussman</strong> at <strong>555 5555</strong> to set up a meeting.</h3>
                    <h3 className="mt-4">Your best friend is in safe hands and you can find it here</h3>
                    <a className="purplebutton ml-auto mt-1 mb-5 w-50 text-center align-self-center">I have my pet back!</a>
                </div>
			
			
		
		</div>
	);
};