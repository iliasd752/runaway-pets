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
  const [call, setCall] = useState(false);

  const user = sessionStorage.getItem("user_id");
  const test = {
    species: "dog",
    name: "name",
  };
  useEffect(() => {
    // // console.log({ qrcode });
    actions.findPet(qrcode);
  }, []);
  const finderSubmit = (e) => {
    //  // console.log(name, phone, location);
    actions.finderFetch(qrcode, name, phone, location, {
      onSuccess: () => {
        setCall(true);
      },
    });
  };
  const handleLocation = (checked) => {
    if (checked) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          //  // console.log(position);
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          // // console.log(location.lat, "testloc")
        });
      } else {
        // I believe it may also mean geolocation isn't supported
        alert("Geolocation denied");
      }
    } else setLocation({});
  };

  return (
    <div className="mt-5 container d-flex flex-column">
      <img
        className="petpiccard2 registerbadge mb-5"
        src={store.findPet.image}
      ></img>

      <div className="form ml-5 d-flex flex-column align-self-center text-center">
        {!call && <h1>{store.findPet.name} </h1>}
        {!call && <h3>{store.findPet.species}</h3>}

        {!call && (
          <h3 className="mt-4">
            {" "}
            <strong>{store.findPet.name}</strong> is so glad you found them!
          </h3>
        )}
        {!call && (
          <h3>
            Their owner <strong> {store.findUser.name} </strong> misses them and
            will appreciate your help.
          </h3>
        )}
        <div className="d-flex flex-column justify-content-center">
          {/* NAME FIELD */}
          {call && <h3>Thank you so much</h3>}
          {!call && (
            <div className="petinfo d-flex flex-column mb-5 mt-4 justify-content-center">
              <label htmlFor="petinfo" className="justify-content-center">
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
          )}

          {/* PHONE NUMBER FIELD */}
          {!call && (
            <div className="petinfo d-flex flex-column mb-4">
              <label htmlFor="petinfo" className="">
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
          )}

          {/* INPUT */}
          {!call && (
            <div className="petinfo d-flex flex-row mb-4 justify-content-center">
              <label htmlFor="petinfo" className="mr-5">
                Share your location with {store.findUser.name}?
              </label>
              <p></p>

              <input
                onChange={(e) => {
                  handleLocation(e.target.value);
                }}
                type="checkbox"
                name="petinfo"
                // className="align-self-center"
                className="marginleft"
              ></input>
            </div>
          )}
        </div>
        {!call && (
          <button
            disabled={!location.lat && !location.lng}
            className="purplebutton w-50 text-center mb-5 mt-5 align-self-center"
            onClick={finderSubmit}
          >
            Submit{" "}
          </button>
        )}
        {/* <a className="purplebutton ml-auto mt-5 w-50 text-center align-self-center">
          Share your location with {store.findUser.name}
        </a> */}
        {call && (
          <a
            href={"tel:" + store.findUser.phone}
            className="purplebutton ml-auto mt-3 mb-5 text-center align-self-center"
          >
            Call {store.findUser.name}
          </a>
        )}
      </div>
    </div>
  );
};
