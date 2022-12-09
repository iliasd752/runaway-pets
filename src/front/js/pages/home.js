import React, { useContext } from "react";
import { Context } from "../store/appContext";
import homelogo from "../../img/homelogo.png";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5 container d-flex">
			<div className="col col-6">
			<img className="homelogo" src={homelogo}></img>
			</div>

			

			<div className="col col-6 d-flex align-items-center">
				<div className="form d-flex flex-column ">
					<label for="email">E-mail</label>
					
					<input type="email" name="email" placeholder="Enter your registered e-mail" className="inputfield"></input>
					
					<label for="password" className="">Password</label>
					
					<input type="password" name="password" placeholder="Enter your password" className="inputfield"></input>
					<p><a className="boldlink">Sign up</a> if you don't have an account</p>
					<a className="purplebutton ml-auto mt-1 mb-5 w-25 text-center">Submit</a>
				</div>
			</div>
			
		
		</div>
	);
};
