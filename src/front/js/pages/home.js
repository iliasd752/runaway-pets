import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import homelogo from "../../img/homelogo.png";
import "../../styles/home.css";
import { Navigate, useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  const user_id = sessionStorage.getItem("user_id");
  const navigate = useNavigate();
  const [activate, setActivate] = useState(false);
  const [failure, setFailure] = useState("")

  const handleClick = () => {
    actions.logIn(email, password, {
		onSuccess: () => {
      console.log("hello")
		  navigate("/pet-card")
		},
		onFailure: () => {
      setFailure(sessionStorage.getItem("error"))
			setActivate(true)
		}
	});
  };

  return (
    <div className="mt-5 container d-flex">
      <div className="col col-6">
        <img className="homelogo mb-5" src={homelogo}></img>
      </div>
      <div className="col col-6 d-flex align-items-center">
        <div className="form ml-5 d-flex flex-column ">
          <h3 className="mb-5">Login to your account</h3>
          <label for="email">E-mail</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your registered e-mail"
            className="inputfield"
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
            className="inputfield"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p>
            <a className="boldlink" href="register-user">
              Sign up
            </a>{" "}
            if you don't have an account
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <a
              className="purplebutton mt-1 mb-5 w-25 text-center mr-5"
              onClick={handleClick}
            >
              Login
            </a>
            <a
              className="ml-3 mt-1 mb-5 w-30 text-center signup"
              href="register-user"
            >
              Sign up
            </a>
          </div>

          <div>
          { activate ? <p className="error">Error, please try again</p> : null } 
          </div>
        </div>
      </div>
    </div>
  );
};
