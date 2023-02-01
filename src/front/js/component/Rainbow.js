import React, { useEffect } from "react";
import icon1 from "../../img/dogicon1.png";
import icon2 from "../../img/scan.png";
import icon3 from "../../img/couch.png";



export const Rainbow = () => {
  return (
    <div className="container d-flex flex-column align-items-center mt-5 mb-5 marginbottom">
      <h2 className="mb-5">Never lose track of your pet again!</h2>
      <div className="rainbowgrid">
        <div className="item1 rainbowbox">
          <div className="rainbowitem d-flex align-items-center justify-content-around">
            <img className="imageicon" src={icon1}></img>
            <h4>Attach our QRCode tag to your pet's collar</h4>
          </div>
        </div>
        <div className="item2 rainbowbox">
          <div className="rainbowitem d-flex align-items-center justify-content-around">
            <img className="imageicon" src={icon2}></img>
            <h4 id="purple">If someone finds your pet, they just have to scan it. <br></br>No app install needed!</h4>
          </div>
        </div>
        <div className="item3 rainbowbox">
          <div className="rainbowitem d-flex align-items-center justify-content-around">
            <img className="imageicon" src={icon3}></img>
            <h4>Contact the finder and heve your best friend back home!</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

// d-flex flex-column mt-5 marginbottom align-items-center
