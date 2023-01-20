import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import petpic from "../../img/dogprofile.png";
import "../../styles/home.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const FoundPet = () => {
  const { store, actions } = useContext(Context);
  const { qrcode } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState({});


  const user = sessionStorage.getItem("user_id");
  const test = {
    species: "dog",
    name: "name",
  };
  useEffect(() => {
    console.log({ qrcode });
    actions.findPet(qrcode);
  }, []);
  const finderSubmit = (e) => {
    console.log(name, phone, location);
    actions.finderFetch(qrcode, name, phone, location);
  }
  const handleLocation = (checked) => {
    if (checked) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        });
      } else {
        // I believe it may also mean geolocation isn't supported
        alert("Geolocation denied");
      }
    } else setLocation({})
  }

  return (
    <div className="mt-5 container d-flex flex-column">
      <img
        className="petpiccard2 registerbadge mb-5"
        src={store.findPet.image}
      ></img>

      <div className="form ml-5 d-flex flex-column align-self-center text-center">
        <h1>{store.findPet.name} </h1>
        <h3>{store.findPet.species}</h3>

        <h3>
          {" "}
          <strong>{store.findPet.name}</strong> is so glad you found them!
        </h3>
        <h3>
          His owner {store.findUser.name} misses them and will appreciate your
          help.
        </h3>
		<div className="d-flex flex-column justify-content-center">
		{/* NAME FIELD */}
        <div className="petinfo d-flex flex-column mb-4 justify-content-center">
          <label for="petinfo" className="justify-content-center">
            What is your name?
          </label>
          <input
           
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="petinfo"
            placeholder="Type your name here"
            className="inputfield align-self-center"
          ></input>
        </div>

		{/* PHONE NUMBER FIELD */}
		<div className="petinfo d-flex flex-column mb-4">
          <label for="petinfo" className="">
            What is your phone number?
          </label>
          <input
           
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="text"
            name="petinfo"
            placeholder="Type your phone number here"
            className="inputfield align-self-center"
          ></input>
        </div>

		{/* INPUT */}
		<div className="petinfo d-flex flex-column mb-4">
          <label for="petinfo" className="">
            Share your location with {store.findUser.name}?
          </label>
          <input
           
            onChange={(e) => {
              handleLocation(e.target.value);
            }}
            type="checkbox"
            name="petinfo"
            placeholder="Type your phone number here"
            className="align-self-center"
          ></input>
        </div>
		</div>
		<a  className="purplebutton w-25 text-center mt-5 align-self-center" onClick={finderSubmit}>
        Submit
      </a>
        {/* <a className="purplebutton ml-auto mt-5 w-50 text-center align-self-center">
          Share your location with {store.findUser.name}
        </a> */}
        <a
          href={store.findUser.phone}
          className="purplebutton ml-auto mt-3 mb-5 w-50 text-center align-self-center"
        >
          Call {store.findUser.name}
        </a>
      </div>
    </div>
  );
};
