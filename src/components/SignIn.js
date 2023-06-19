import React, { useState } from "react";
import "./SignInForm.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  let login=()=>{
    navigate("/login")
  }

 
    let [user, setUser] = useState({
      username: "",
      password: "",
      email: "",
      mobile: "",
    });
  
    let handlerNameAction = (e) => {
      let newuser = { ...user, username: e.target.value };
      setUser(newuser);
    };
  
    let handlerPasswordAction = (e) => {
      let newuser = { ...user, password: e.target.value };
      setUser(newuser);
    };
  
    let handlerEmailAction = (e) => {
      let newuser = { ...user, email: e.target.value };
      setUser(newuser);
    };
  
    let handlerMobileAction = (e) => {
      let newuser = { ...user, mobile: e.target.value };
      setUser(newuser);
    };
  
    let registerAction = async () => {
      // BACKEND
      let url = `http://localhost:4000/adduserregister?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;
      await fetch(url);
  
      let newuser = {
        
        username: "",
        password: "",
        email: "",
        mobile: "",
      };
      setUser(newuser);
    };

  return (
    <div className="container">
      <div className="formbox">
        <h1 id="title">Sign Up</h1>
        <form>
          <div className="input-group">
            <div className="input-field" id="namefield">
              {/* <FontAwesomeIcon icon={faUser} /> */}
              <input
                type="text"
                name="Name"
                value={user.username}
                onChange={handlerNameAction}
                placeholder="Name"
              />
            </div>
           
            <div className="input-field">
              {/* <FontAwesomeIcon icon={faEnvelope} /> */}
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handlerEmailAction}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-field">
              {/* <FontAwesomeIcon icon={faLock} /> */}
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handlerPasswordAction}
                placeholder="Password"
                required
              />
            </div>
           
          </div>
          <div className="btn-field">
            <button type="submit" onClick={registerAction} id="SignUpBtn">
              Sign Up
            </button>
              <button
              type="submit"
              onClick={login}
              id="SignInBtn"
              className="Disable1"
            >
              Sign In
  </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
