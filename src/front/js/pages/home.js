import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import homelogo from "../../img/homelogo.png";
import "../../styles/home.css";
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { Rainbow } from "../component/Rainbow";
import YoutubeEmbed from "../component/YoutubeVideo";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  const user_id = sessionStorage.getItem("user_id");
  const navigate = useNavigate();
  const [activate, setActivate] = useState(false);
  const [failure, setFailure] = useState("");

  const handleClick = () => {
    actions.logIn(email, password, {
      onSuccess: () => {
        // // console.log("hello")
        navigate("/pet-card");
      },
      onFailure: () => {
        setFailure(sessionStorage.getItem("error"));
        setActivate(true);
      },
    });
  };

  return (
    <div className=" margintop">
      <div className="mt-5 container d-flex">
        <div className="col col-6">
          <img className="homelogo marginleftbig mb-5" src={homelogo}></img>
        </div>
        <div className="col col-6 d-flex flex-column align-items-start justify-content-center">
          <h1 className="herosection">A scan away from home</h1>

          {/* BUTTONS */}
          <div className="d-flex align-items-center justify-content-between">
            <a
              className="purplebutton mt-1 mb-5  w-50 text-center mr-5"
              onClick={handleClick}
            >
              Login
            </a>
            <a
              className="ml-3 mt-1 mb-5 marginleft w-75 text-center signup"
              href="register-user"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
      <Rainbow />

      <div className="video align-self-center justify-self-center">
      <YoutubeEmbed embedId="JgxyNIkZmLY" />
    </div>


      {/* FOOTER */}

      <div className="footer">
        <div className="container d-flex">
          <div className="col col-6">
          <h2>Runaway Pets</h2>
          <h6>Link</h6>
          <h6>Link</h6>
          <h6>Link</h6>
          <h6>Link</h6>
          <h6>Link</h6>
          </div>
          
          
          {/* LOGIN */}
          <div className="container col col-6">
            <div className="form ml-5 d-flex flex-column col col-6">
              <h3 className="mb-5">Login to your account</h3>
              <label for="email">E-mail</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your registered e-mail"
                className="inputfield-purple"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <label type="password" className="password">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="inputfield-purple"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <p>
                <a className="boldlink" href="register-user">
                  Sign up
                </a>{" "}
                if you don't have an account
              </p>
              <div className="d-flex align-items-center justify-content-start">
                <a
                  className="purplebutton mt-1 mb-5 w-25 text-center"
                  onClick={handleClick}
                >
                  Login
                </a>
                <a
                  className="marginleft mt-1 mb-5 w-25 text-center signup"
                  href="register-user"
                >
                  Sign up
                </a>
              </div>

              <div>
                {activate ? (
                  <p className="error">Error, please try again</p>
                ) : null}
              </div>
            </div>
          </div>
          <FontAwesomeIcon className="icon" icon="fa-brands fa-instagram" />
        </div>
      </div>
    </div>
  );
};
