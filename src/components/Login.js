import React from "react";
import "./Login.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  

  const handleSignInClick = async () => {
    try {
      let url = `http://localhost:4000/login?email=${user.email}&password=${user.password}`;
      let res = await fetch(url);

      if (res.status == 400) {
        let msg = await res.text();
        throw new Error(msg);
      }
      localStorage.setItem("loginstatus", "true");
      localStorage.setItem("username", `${user.Name}`);

      alert("Login Successfull");
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
    }
  };

  const [user, setUser] = useState({
    Name: "",
    email: "",
    password: "",
  });

  let handlerNameAction = (e) => {
    let newuser = { ...user, Name: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  return (
    <div className="container">
      <div className="formbox">
        <h1 id="title">Sign Up</h1>
        <form>
          <div className="input-group">
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
            <p>
              Lost Password <a href="../MainPage/home.html">Click here</a>
            </p>
          </div>
          <div className="btn-field">
          
            <button
              type="submit"
              onClick={handleSignInClick}
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

export default Login;
