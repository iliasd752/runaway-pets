import React from "react";
import { useState, useEffect } from "react";
import registerbadge from "../../img/register-pet-badge.png";
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export const RegisterPet = () => {

    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [important, setImportant] = useState("");
    const [image, setImage] = useState("");
    const [userId, setUserId] = useState("");
    const [qrCode, setQrCode] = useState("");




    const imageHandler = (e) => {
        e.preventDefault();
        sessionStorage.setItem("image", e.target.files[0])

        

        // setImage(sessionStorage.getItem("image"))


    }

    const test = sessionStorage.getItem("image")

    const handleCLick = (e) => {
        e.preventDefault();
        const opt = {
                "name": name,
                "species": species,
                "important": important,
                "image": test,
                "user_id": userId,
                "qr_code": qrCode
                //   }
        }

        axios.post('https://3001-iliasd752-runawaypets-0cstea2nvk9.ws-eu80.gitpod.io/api/register_pet', opt)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        console.log(opt)

   
    }


	return (
		<div className="mt-5 container d-flex flex-column align-items-center">
			
			<img className="registerbadge mb-5" src={registerbadge}></img>

            <div className="petname d-flex flex-column mb-3">
            <label for="petname">Pet name</label>
			<input value={name} onChange={(e) => {setName(e.target.value)}}  type="text" name="petname" placeholder="Bingo" className="inputfield align-self-left"></input>
            </div>

            <div className="petinfo d-flex flex-column mb-4">
			<label for="petinfo" className="" >Important information</label>
			<input value={important} onChange={(e) => {setImportant(e.target.value)}}  type="text" name="petinfo" placeholder="Don't feed him French fries" className="inputfield"></input>
            </div>

               {/* TEST SPECIES */}

            <div className="petinfo d-flex flex-column mb-4">
            <label for="petselect" className="petlabel" >Pet species</label>
            <Form.Select type="text" onChange={(e) => {setSpecies(e.target.value)}}  aria-label="Default select example" className="drop" name="petselect">
                 <option value="Dog">Dog</option>
                 <option value="Cat">Cat</option>
                 <option value="Lizard">Lizard</option>
            </Form.Select>
            </div>
            
             {/* TEST USER ID */}

             <div className="petinfo d-flex flex-column mb-4">
			<label for="petinfo" className="" >USER ID</label>
			<input value={userId} onChange={(e) => {setUserId(e.target.value)}}  type="text" name="petinfo" placeholder="Don't feed him French fries" className="inputfield"></input>
            </div>

            {/* TEST QR CODE */}

            <div className="petinfo d-flex flex-column mb-4">
			<label for="petinfo" className="" >QR CODE</label>
			<input value={qrCode} onChange={(e) => {setQrCode(e.target.value)}}  type="text" name="petinfo" placeholder="Don't feed him French fries" className="inputfield"></input>
            </div>

          

    {/* TEST IMAGE UPLOAD */}

    <div className="petinfo d-flex flex-column mb-4">
			<label  for="petpicture" className="" >PICTURE</label>
			<input  value={image} onChange={ imageHandler }  type="file" name="petpicture" placeholder="Don't feed him French fries" ></input>
    </div>

         
             <button onClick={handleCLick}  className="purplebutton w-25 text-center mt-5">Submit</button>

            <a onClick={handleCLick}  className="purplebutton w-25 text-center mt-5">Submit</a>

            <a className="purplebutton w-25 text-center mt-2">Back to home</a>

			
		
		</div>
	);
};
