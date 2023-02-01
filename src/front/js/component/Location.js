import React, { useRef, useEffect } from "react";


const MAP_KEY = process.env.MAP_KEY;
const GMaps = ({ placeName, lat, lng }) => { 
  const googleMapRef = useRef();
  let googleMap
  const showPosition = (position) => {
    alert(`${position.coords.latitude} - ${position.coords.longitude}`);
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      getLatLng(position?.coords.latitude, position?.coords.longitude); 
    });
  };
  const connect = (callback) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(callback || showPosition);
    } else {
      // I believe it may also mean geolocation isn't supported
      alert("Geolocation denied");
    }
  }

  useEffect(() => {
    if (lat && lng) {
      connect(() => showPosition({coords: {latitude: lat, longitude: lng}}));
    }
  },[lat, lng]);

  const createGoogleMap = (lat, lng) => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 10,
      center: { lat, lng },
      disableDefaultUI: true,
    });
  };
  const getLatLng = (latit, long) => {
    let latitude, longitude, placeId;
    new window.google.maps.Geocoder().geocode(
      { address: `${placeName}` },
      function (results, status) {
        if (status === window.google.maps.GeocoderStatus.OK) {
          placeId = results[0].place_id;
          createGoogleMap(latit, long);
          latitude = results[0].geometry.location.lat(latit);
          longitude = results[0].geometry.location.lng(long);
          new window.google.maps.Marker({
            position: {
              lat: latit,
              lng: long,
            },
            map: googleMap,
            animation: window.google.maps.Animation.DROP,
            title: `${placeName}`,
          });
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      }
    );
  };
  return (
    <div
      id="google-map"
      ref={googleMapRef}
      style={{ width: "800px", height: "600px" }}
    />
  );
};

export default GMaps;
