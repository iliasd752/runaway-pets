import React from "react";
import registerbadge from "../../img/register-pet-badge.png";

export const PetProfile = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div className="mt-5 container d-flex flex-column align-items-center">
			
			<img className="registerbadge mb-5" src={registerbadge}></img>

            <div className="petname d-flex flex-column mb-3">
            <label for="petname">Pet name</label>
			<input type="text" name="petname" placeholder="Bingo" className="inputfield align-self-left"></input>
            </div>

            <div className="petinfo d-flex flex-column mb-4">
			<label for="petinfo" className="">Important information</label>
			<input type="text" name="petinfo" placeholder="Don't feed him French fries" className="inputfield"></input>
            </div>

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pet species</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Dog</a>
                  <a class="dropdown-item" href="#">Cat</a>
                </div>

                
            </div>

            <div className="petpicture d-flex justify-content-around align-items-center mt-3">
            <p className="align-self-left w-50">Upload a picture:</p>
            <a className="purplebutton w-50 text-center">Choose file</a>
            </div>
            
            <a className="purplebutton w-25 text-center mt-5">Submit</a>

            <a className="purplebutton w-25 text-center mt-2">Back to home</a>

			
		
		</div>
	);
};
