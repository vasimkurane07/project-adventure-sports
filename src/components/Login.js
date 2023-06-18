import React from "react";
import "./Login.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    let [user,setUser]=useState({username:"",password:""})
    let formRef = useRef();
    let [isSuccess, setIsSuccess] = useState(false);
    let [isError, setIsError] = useState(false);
  
    let handlerEmailAction = (e) => {
        let newuser = { ...user, email: e.target.value };
        setUser(newuser);
      };
  
    let handlerPasswordAction = (e) => {
      let newuser = { ...user, password: e.target.value };
      setUser(newuser);
    };
  
   
    let loginAction = async () => {
        try {
            formRef.current.classList.add("was-validated");
            let formStatus = formRef.current.checkValidity();
            if (!formStatus) {
              return;
            }
      
        let url = `http://localhost:4000/login-by-post`;
        let data = { email: user.email, password: user.password };
        let res = await fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status == 500) {
            let erroMessage = await res.text();
            throw new Error(erroMessage);
          }
    
          localStorage.setItem("loginStatus", "true");
          navigate("/home", { replace: true });
        }catch (err) {
          alert(err.message);
          setIsError(true);
        } finally {
          setTimeout(() => {
            setIsError(false);
            setIsSuccess(false);
          }, 5000);
        }
      };
    
    
  return (
    <div className="row">
      <div className="col-sm-12 col-md-12">
        <section
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR17AiL0Hy6PItPdfdijDw4vn2KuZLjjGQ4Gg&usqp=CAU)",
          }}
        >
          <div className="loginbox">
            <img src="assests/images/log.jpeg" className="avatar" alt="Logo" />
            <div style={{ paddingTop: "15%" }}>
              <h1 style={{ color: "black", fontWeight: "bold" }}>Login Here</h1>
              <form style={{ color: "rgb(174, 142, 142)" }}>
                <p style={{ paddingTop: "5%" }}>Username</p>
                <input
                  type="text"
                  name=""
                  placeholder="Enter Username"
                  required
                  style={{ paddingTop: "2%", color: "black" }}
                  value={user.email}
                  onChange={handlerEmailAction}
                  
                />
                <p style={{ paddingTop: "2%" }}>Password</p>
                <input
                  type="password"
                  name=""
                  placeholder="Enter Password"
                  required
                  style={{ paddingTop: "2%", color: "black" }}
                  value={user.password}
                  onChange={handlerPasswordAction}
                  
                />
                <input type="submit" name="" value="Login" onClick={loginAction}/>
                <br />
                <a href="#" style={{ color: "blue" }}>
                  Forget your Password?
                </a>
                <br />
                <a href="#" style={{ color: "blue" }}>
                  Don't have an account?
                </a>
              </form>
              {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;