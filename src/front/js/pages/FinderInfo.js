import React, { useContext } from "react";
import { Context } from "../store/appContext";
import homelogo from "../../img/homelogo.png";
import "../../styles/home.css";

export const FinderInfo = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div className="mt-5 container d-flex flex-column align-items-center">
			
			<img className="homelogo mb-5" src={homelogo}></img>
			

			

			
				<div className="form ml-5 d-flex flex-column justify-content-center ">
					<label for="name">Your name</label>
					
					<input type="text" name="name" placeholder="John Doe" className="inputfield"></input>
					
					<label for="phone" className="">Your phone number</label>
					
					<input type="text" name="phone" placeholder="+1 555 5555" className="inputfield"></input>
					<p className="d-inline">Can we share your location with Bruno?</p>
					<input className="form-check-input d-inline" type="checkbox" value="" id="flexCheckIndeterminate"></input>
					<a className="purplebutton ml-auto mt-1 mb-5 w-25 text-center align-self-center">Submit</a>
					<div className="d-flex container  justify-content-around">
					<a className="purplebutton text-center ">Call owner</a>
					<a className="purplebutton text-center ">See pet info</a>
					</div>
					
				
			</div>
			
		
		</div>
	);
};
