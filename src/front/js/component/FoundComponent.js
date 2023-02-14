import React, { useContext, useEffect, useState } from "react";
import petpic from "../../img/dogprofile.png";
import "../../styles/home.css";
import GMaps from "../component/Location";
import { Context } from "../store/appContext";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


export const FoundComponent = (props) => {
  const { store, actions } = useContext(Context);
  const [petFounds, setPetFounds] = useState([]);
  // // console.log("my props", props);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBRvJfMguSSTm7y8FG4oXVYUNPEyFTrolE",
});
 function Map() {
  return <GoogleMap zoom={10} center={{lat: 44, lng:-80}}>
    <Marker position={{lat: 44, lgn: -80}} />
  </GoogleMap>

}

  return (
    <div className="mt-5 container d-flex flex-column foundpetcard">
      <img className="petpiccard registerbadge mb-5" src={props.image}></img>
      <div className="form ml-5 d-flex flex-column align-self-center text-center">
        <h3>
          Call <strong>{props.name}</strong> at <strong>{props.phone}</strong>{" "}
          to set up a meeting.
        </h3>
        <h3 className="mt-4">{props.petName}</h3>
        <div>
          <GMaps lat={props.lat} lng={props.lng} />
        </div>
        <a className="purplebutton ml-auto mt-5 mb-5 w-50 text-center align-self-center">
          I have my pet back!{qr}
        </a>
      </div>
    </div>
  );
};
