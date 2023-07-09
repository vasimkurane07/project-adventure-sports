import React, { useState } from 'react';
import './User.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { NavLink, useHistory } from "react-router-dom";

function User() {
    const history = useHistory();
    const [user, setUser] = useState({
       
        email: "",
        password: "",
       
      });
      let setEmail=(e)=>{
        let newuser = { ...user, email: e.target.value };
    setUser(newuser);
};
    let setPassword=(e)=>{
        let newuser = { ...user, password: e.target.value };
    setUser(newuser);
      }
      function handleSubmit(){
        let status;
        console.log(user.email);
        let url=`http://localhost:7000/user?email=${user.email}&password=${user.password}`
         axios.get(url).then((response) => {
             console.log(response.data);
             if(response.data=="successfull")
             {
                history.push('/');
             } else
             status=response.data;
             
             
         })
       }
  return (
    <div className='body'>
    <div className="user-login">
      <h2>User Login</h2>
      <form >
        <div className="form-group">
            
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={setEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={setPassword}
          />
        </div>
        <button onClick={handleSubmit}>Login</button>
        <Link to="/Register2">
        <a>Register here</a>
        </Link>
      </form>
    </div>
    </div>
  );

}

export default User;