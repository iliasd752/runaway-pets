import React from "react";
import { useState } from "react";
import registerbadge from "../../img/register-pet-badge.png";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const RegisterUser = () => {
	

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();


    const handleCLick = (e) => {
        e.preventDefault();
        const opt = {
            
                "name": name,
                "last_name": lastName,
                "email": email,
                "password": password,
                "phone": phoneNumber,
                  
        }

        axios.post(process.env.BACKEND_URL + "/api/register", opt)
        .then(function (response) {
          console.log(response);
          navigate("/")         
        })
        .catch(function (error) {
          console.log(error);
        });
      
      

        console.log(opt)

   
    }

  


	return (
		<div className="mt-5 container d-flex flex-column align-items-center">
			
			<h3 className="mb-5">Fill in the form to create your account</h3>

            <div className="petname d-flex flex-column mb-3">
            <label for="username">Name</label>
			<input value={name} onChange={(e) => {setName(e.target.value)}}  type="text" name="username" placeholder="John" className="inputfield align-self-left"></input>
            </div>

            <div className="petinfo d-flex flex-column mb-4">
			<label for="lastname" className="" >Last Name</label>
			<input value={lastName} onChange={(e) => {setLastName(e.target.value)}}  type="text" name="lastname" placeholder="Smith" className="inputfield"></input>
            </div>

            {/* TEST IMAGE UPLOAD */}

            <div className="petinfo d-flex flex-column mb-4">
			<label for="petinfo" className="" >E-mail</label>
			<input value={email} onChange={(e) => {setEmail(e.target.value)}}  type="text" name="petinfo" placeholder="Your e-mail" className="inputfield"></input>
            </div>

             {/* TEST USER ID */}

             <div className="petinfo d-flex flex-column mb-4">
			<label for="petinfo" className="" >Password</label>
			<input value={password} onChange={(e) => {setPassword(e.target.value)}}  type="password" name="petinfo" placeholder="Password" className="inputfield"></input>
            </div>

            {/* TEST QR CODE */}

            <div className="petinfo d-flex flex-column mb-4">
			<label for="petinfo" className="" >Phone number</label>
			<input value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}  type="text" name="petinfo" placeholder="Your phone number" className="inputfield"></input>
            </div>

             <button onClick={handleCLick}  className="purplebutton w-25 text-center mt-5">Submit</button>


            <a className="purplebutton w-25 text-center mt-2">Back to home</a>

			
		
		</div>
	);
};
