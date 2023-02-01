import React, { useContext, useEffect, useState } from "react";
import petpic from "../../img/dogprofile.png";
import "../../styles/home.css";
import GMaps from "../component/Location";
import { Context } from "../store/appContext";
import { PetComponent } from "../component/PetComponent";



export const Notification = () => {
  const { store, actions } = useContext(Context);
  const [petFounds, setPetFounds] = useState([]);
  const token = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("user_id");
  
  useEffect(() => {
    actions.petList(token, user);
  }, []);
  useEffect(() => {
    if (store.petList) {
      setPetFounds(store.petList.filter((pet) => pet.finder_id));
    }
  }, [store.petList]);
  useEffect(() => {
    // // console.log(petFounds)
    if (petFounds.length) {
      actions.findFinder(petFounds.map((x) => x.finder_id));
    }
  }, [petFounds]);

  if (!petFounds?.length) {
    return null;
  }
  return (
    <div className="mt-5 container d-flex flex-column">
      {petFounds.map((x) => {
        const finder = store.findFinder.find((f) => f.id == x.finder_id);
        // // console.log("Finder", store)
        return <GMaps lat={finder?.lat} lng={finder?.lng} />
        
      })}
    </div>
    
  );
};
