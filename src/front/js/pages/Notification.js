import React, { useContext, useEffect, useState } from "react";
import petpic from "../../img/dogprofile.png";
import "../../styles/home.css";
import GMaps from "../component/Location";
import { Context } from "../store/appContext";
import { PetComponent } from "../component/PetComponent";
import { FoundComponent } from "../component/FoundComponent";
import { ThankYou } from "../pages/ThankYou";



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
    return <div className="mt-5">
      <ThankYou  />
    </div>;
  }
  return (
    <div className="mt-5 container d-flex flex-column">
      {petFounds.map((x) => {
        const finder = store.findFinder.find((f) => f.id == x.finder_id);
        // // console.log("Finder", store)
        return <FoundComponent
            name={finder?.name}
            image={x?.image}
            petName={x?.name}
            phone={finder?.phone}
            lat={finder?.lat}
            lng={finder?.lng}
            qr_code={x?.qr_code}
          />
        
      })}
    </div>
    
  );
};
