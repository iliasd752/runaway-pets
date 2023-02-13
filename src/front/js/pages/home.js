import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import homelogo from "../../img/homelogo.png";
import homelogo2 from "../../img/logo11.png";
import "../../styles/home.css";
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { Rainbow } from "../component/Rainbow";
import YoutubeEmbed from "../component/YoutubeVideo";
import { useRef } from "react";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  const user_id = sessionStorage.getItem("user_id");
  const navigate = useNavigate();
  const [activate, setActivate] = useState(false);
  const [failure, setFailure] = useState("");
  const ref = useRef(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        <div className="col col-4">
          <img className="homelogo marginleftbig mb-5" src={homelogo2}></img>
        </div>
        <div className="col col-8 d-flex flex-column align-items-start justify-content-center">
          <h1 className="herosection">Runaway Pets</h1>
          <h2 className="mb-3">A scan away from home</h2>

          {/* BUTTONS */}
          <div className="d-flex align-items-center justify-content-between">
            <a
              className="purplebutton mt-1 mb-5  w-50  text-center "
              onClick={handleScroll}
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

      <div className="footer d-flex flex-column align-items-center" ref={ref}>
        {/* LOGIN */}
        <div className="container petcard1 d-flex justify-content-center">
          <div className="form ml-5 d-flex flex-column">
            <h2 className="mb-4 mt-5 text-center">Login to your account</h2>
            {/* <label htmlFor="email">E-mail</label> */}

            <input
              type="email"
              name="email"
              placeholder="Enter your registered e-mail"
              className="inputfield"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {/* 
              <label type="password" className="password">
                Password
              </label> */}

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="inputfield mt-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <p>
              <a
                className="boldlink  mb-5 marginleft w-50 text-center"
                href="register-user"
              >
                Sign up
              </a>{" "}
              if you don't have an account
            </p>
            <div className="d-flex align-items-center justify-content-start">
              <a
                className="purplebutton mt-1 mb-5 w-50 text-center"
                onClick={handleClick}
              >
                Login
              </a>
              <a
                className="marginleft mt-1 mb-5 w-50 text-center signup"
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
        <div className="mt-5 mb-5 signup">
          <a className="link" href="about-us">
            About us
          </a>
        </div>
      </div>
    </div>
  );
};
