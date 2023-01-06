import React, { useContext } from "react";
import { Context } from "../store/appContext";
import homelogo from "../../img/homelogo.png";
import "../../styles/home.css";
import { NewNav } from "../component/NewNav";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5 container d-flex">
			<div className="col col-6">
			<img className="homelogo mb-5" src={homelogo}></img>
			</div>
			<div className="col col-6 d-flex align-items-center">
				
				<div className="form ml-5 d-flex flex-column ">
				<h3 className="mb-5">Login to your account</h3>
					<label for="email">E-mail</label>
					
					<input type="email" name="email" placeholder="Enter your registered e-mail" className="inputfield"></input>
					
					<label for="password" className="">Password</label>
					
					<input type="password" name="password" placeholder="Enter your password" className="inputfield"></input>
					<p><a className="boldlink" href="register-user">Sign up</a> if you don't have an account</p>
					<div className="d-flex align-items-center justify-content-between">		
                    <a className="purplebutton mt-1 mb-5 w-25 text-center mr-5">Login</a>
                    <a className="ml-3 mt-1 mb-5 w-30 text-center signup">Sign up</a>
                    </div>
 
				</div>
			</div>
			
		
		</div>
	);
};
