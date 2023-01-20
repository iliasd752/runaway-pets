import React, { useRef, useEffect } from "react";

const MAP_KEY = "AIzaSysfjntjnerhbewsgw325r24635tEyFTrolE";
const GMaps = ({ placeName }) => {
  const googleMapRef = useRef();
  let googleMap;
  const showPosition = (position) => {
    alert(`${position.coords.longitude} - ${position.coords.latitude}`);
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      getLatLng(position);
    });
  };
  const connect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      // I believe it may also mean geolocation isn't supported
      alert("Geolocation denied");
    }
  };

  useEffect(() => {
    connect();
  }, []);

  const createGoogleMap = (lat, lng) => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 10,
      center: { lat, lng },
      disableDefaultUI: true,
    });
  };
  const getLatLng = (position) => {
    let lat, lng, placeId;
    new window.google.maps.Geocoder().geocode(
      { address: `${placeName}` },
      function (results, status) {
        if (status === window.google.maps.GeocoderStatus.OK) {
          placeId = results[0].place_id;
          createGoogleMap(position.coords.latitude, position.coords.longitude);
          lat = results[0].geometry.location.lat(position.coords.latitude);
          lng = results[0].geometry.location.lng(position.coords.longitude);
          new window.google.maps.Marker({
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
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
