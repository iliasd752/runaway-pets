import React from "react";
import { useState, useEffect } from "react";
import registerbadge from "../../img/register-pet-badge.png";
import Form from "react-bootstrap/Form";
import axios from "axios";

export const RegisterPet = () => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [important, setImportant] = useState("");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const [imageData, setimageData] = useState("");

  const handleCLick = (e) => {
    e.preventDefault();

   

    const formData = new FormData();
    formData.append("file", input);
    formData.append("upload_preset", "g8kqzblj");

    const postImage = async () => {
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dbw5oujiu/image/upload",
          formData
        );
        console.log(response);
        const testing = response.data.url;
        

        if (response.status == 200) {

            const photoURL = response.data.url;
            setimageData(photoURL);
            console.log(imageData, "yhis is image data")

            const authaxios = axios.create({
              baseURL: env.BACKEND_URL,
              headers: {
                
               Authorization: `Bearer ${token}` 
              }
            })

                authaxios.post("/api/register_pet", {
                "name": name,
                "species": species,
                "important": important,
                "image": photoURL,
                "user_id": userId,
                "qr_code": qrCode
            }) .then (console.log(response, "Hello"))
        
        } 
      } catch (error) {
        console.error(error);
      }
    };
    postImage()
    
  };

  return (
    <div className="mt-5 container d-flex flex-column align-items-center">
      <img className="registerbadge mb-5" src={registerbadge}></img>

      <div className="petname d-flex flex-column mb-3">
        <label for="petname">Pet name</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="petname"
          placeholder="Bingo"
          className="inputfield align-self-left"
        ></input>
      </div>

      <div className="petinfo d-flex flex-column mb-4">
        <label for="petinfo" className="">
          Important information
        </label>
        <input
          value={important}
          onChange={(e) => {
            setImportant(e.target.value);
          }}
          type="text"
          name="petinfo"
          placeholder="Don't feed him French fries"
          className="inputfield"
        ></input>
      </div>

      {/* TEST SPECIES */}

      <div className="petinfo d-flex flex-column mb-4">
        <label for="petselect" className="petlabel">
          Pet species
        </label>
        <Form.Select
          type="text"
          onChange={(e) => {
            setSpecies(e.target.value);
          }}
          aria-label="Default select example"
          className="drop"
          name="petselect"
        >
          <option>--</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Lizard">Lizard</option>
        </Form.Select>
      </div>

      {/* TEST USER ID */}

      <div className="petinfo d-flex flex-column mb-4">
        <label for="petinfo" className="">
          USER ID
        </label>
        <input
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          type="text"
          name="petinfo"
          placeholder="Don't feed him French fries"
          className="inputfield"
        ></input>
      </div>

      {/* TEST QR CODE */}

      <div className="petinfo d-flex flex-column mb-4">
        <label for="petinfo" className="">
          QR CODE
        </label>
        <input
          value={qrCode}
          onChange={(e) => {
            setQrCode(e.target.value);
          }}
          type="text"
          name="petinfo"
          placeholder="Don't feed him French fries"
          className="inputfield"
        ></input>
      </div>

      {/* TEST IMAGE UPLOAD */}

      <div className="petinfo d-flex flex-column mb-4">
        <label for="petpicture" className="">
          PICTURE
        </label>
        <input
          value={image}
          onChange={(e) => {
            setInput(e.target.files[0]);
          }}
          type="file"
          name="petpicture"
        ></input>
      </div>

      <img src={imageData} alt="test" width="140" height="130"/>

     

      <button
        onClick={handleCLick}
        className="purplebutton w-25 text-center mt-5"
      >
        Submit
      </button>

      <a onClick={handleCLick} className="purplebutton w-25 text-center mt-5">
        Submit
      </a>

      <a className="purplebutton w-25 text-center mt-2">Back to home</a>
    </div>
  );
};
