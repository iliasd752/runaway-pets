import React from "react";
import { useState, useEffect } from "react";
import registerbadge from "../../img/register-pet-badge.png";
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export const RegisterPet = () => {
	// const { store, actions } = useContext(Context);

    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [important, setImportant] = useState("");
    const [image, setImage] = useState("");
    const [userId, setUserId] = useState("");
    const [qrCode, setQrCode] = useState("");

    const handleCLick = (e) => {
        e.preventDefault();
        const opt = {
            // method: "POST",
            // headers: {
            //     "Content-Type": "application-json"
            // },
            // body: {
                "name": name,
                "species": species,
                "important": important,
                "image": true,
                "user_id": 2,
                "qr_code": 56
                //   }
        }

        axios.post('https://3001-iliasd752-runawaypets-eb9ghg6ue0p.ws-eu80.gitpod.io/api/register_pet', opt)
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
            <label for="petname">Pet name</label>
			<input value={name} onChange={(e) => {setName(e.target.value)}}  type="text" name="petname" placeholder="Bingo" className="inputfield align-self-left"></input>
            </div>

            <div className="petinfo d-flex flex-column mb-4">
			<label for="petinfo" className="" >Important information</label>
			<input value={important} onChange={(e) => {setImportant(e.target.value)}}  type="text" name="petinfo" placeholder="Don't feed him French fries" className="inputfield"></input>
            </div>

               {/* TEST SPECIES */}

             {/* <div className="petinfo d-flex flex-column mb-4">
			<label for="petinfo" className="" >SPECIES</label>
			<input value={species} onChange={(e) => {setSpecies(e.target.value)}}  type="text" name="petinfo" placeholder="Don't feed him French fries" className="inputfield"></input>
            </div> */}
            <div className="petinfo d-flex flex-column mb-4">
            <label for="petselect" className="petlabel" >Pet species</label>
            <Form.Select onChange={() => {setSpecies(e.target.value)}}  aria-label="Default select example" className="drop" name="petselect">
                 <option value="1">Dog</option>
                 <option value="2">Cat</option>
                 <option value="3">Lizard</option>
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
			<input  value={image} onChange={(e) => {setImage(e.target.value)}}  type="file" name="petpicture" placeholder="Don't feed him French fries" ></input>
    </div>

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
