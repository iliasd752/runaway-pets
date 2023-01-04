import React from "react";
import { useState } from "react";
import registerbadge from "../../img/register-pet-badge.png";
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export const RegisterUser = () => {
	

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


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
        })
        .catch(function (error) {
          console.log(error);
        });
      
      
        // fetch('https://3001-iliasd752-runawaypets-eb9ghg6ue0p.ws-eu79.gitpod.io/api/register_pet', opt.body)
        // .then((response) => console.log(response))
        // .then((data) => console.log(data))
        // .catch(err => {console.log(err)});

        console.log(opt)

   
    }

    // useEffect(() => {
    //     fetch('https://3001-iliasd752-runawaypets-eb9ghg6ue0p.ws-eu79.gitpod.io/api/register_pet')
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));
    // }, []);


	return (
		<div className="mt-5 container d-flex flex-column align-items-center">
			
			<img className="registerbadge mb-5" src={registerbadge}></img>

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



            {/* <Form.Select onChange={() => {setSpecies(e.target.value)}}  aria-label="Default select example" className="drop">
      <option>Choose your pet species</option>
      <option value="1">Dog</option>
      <option value="2">Cat</option>
      <option value="3">Lizard</option>
    </Form.Select> */}

            {/* <div className="petpicture d-flex justify-content-around align-items-center mt-3">
            <p className="align-self-left w-50">Upload a picture:</p>
            <a className="purplebutton w-50 text-center">Choose file</a>
            </div>
             */}
             <button onClick={handleCLick}  className="purplebutton w-25 text-center mt-5">Submit</button>

            <a onClick={handleCLick}  className="purplebutton w-25 text-center mt-5">Submit</a>

            <a className="purplebutton w-25 text-center mt-2">Back to home</a>

			
		
		</div>
	);
};
