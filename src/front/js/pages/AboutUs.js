import React from "react";
import jose from "../../img/profi.jpeg";
import ian from "../../img/ian.jpg";
import ilias from "../../img/ilias.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export const AboutUs = () => {

 

  return (
    <div className="container d-flex flex-column align-items-center">

    <h1 className="mt-5">Meet Runaway Pets team</h1>

    <div className="mt-5 container d-flex justify-content-around flex-row align-items-betweenr">

       
        {/* JOSÉ */}
        <div className="d-flex flex-column justify-content-center petcardfound align-items-center mb-4 mr-4 ml-3">
        <div className="col d-flex flex-column align-items-center ml-5">
          <img src={jose} className="petpiccard"></img>
          <h2 className="mt-5">José Câmara</h2>
          <h3 className="card_species">Check my work</h3>
          <div className="d-flex">
            <a href="https://www.linkedin.com/in/jhcamara/" target="_blank">
          <i className="fa-brands fa-linkedin socialicons"></i>
          </a>
          <a href="https://github.com/jhcamara" target="_blank">
          <i className="fa-brands fa-github socialicons"></i>
          </a>
          </div>
        </div>
      </div>

      {/* ILIAS */}

      <div className="d-flex flex-column justify-content-center petcardfound align-items-center mb-4 mr-4 ml-3">
        <div className="col d-flex flex-column align-items-center ml-5">
          <img src={ilias} className="petpiccard"></img>
          <h2 className="mt-5">Ilias Dinia</h2>
          <h3 className="card_species">Check my work</h3>
          <div className="d-flex">
            <a href="https://www.linkedin.com/in/ilias-dinia-113584144" target="_blank">
          <i className="fa-brands fa-linkedin socialicons"></i>
          </a>
          <a href="https://github.com/iliasd752" target="_blank">
          <i className="fa-brands fa-github socialicons"></i>
          </a>
          </div>
        </div>
      </div>

    {/* IAN */}
      <div className="d-flex flex-column justify-content-center petcardfound align-items-center mb-4 mr-4 ml-3">
        <div className="col d-flex flex-column align-items-center ml-5">
          <img src={ian} className="petpiccard"></img>
          <h2 className="mt-5">Ian Effraimidis</h2>
          <h3 className="card_species">Check my work</h3>

          <div className="d-flex">
            <a href="https://linkedin.com/in/ian-gabriel-effraimidis-22662158" target="_blank">
          <i className="fa-brands fa-linkedin socialicons"></i>
          </a>
          <a href="https://github.com/ianeffremidis" target="_blank">
          <i className="fa-brands fa-github socialicons"></i>
          </a>
          </div>

        </div>
      </div>
    </div>

    {/* MISSION */}

    <h2 className="mt-5">Our Mission</h2>
    <p className="mt-3 mb-5 align-self-center text-center">Our mission is to give pets and owners a way to reunite in case of separation ! <br></br>
Thanks to a unique QRcode attached to your pet, anyone can scan it and help you find your pet. <br></br>
Finders are able to share their contact information with pet owners and even the exact location with the help of google maps API.
</p>

    </div>


  );
};

