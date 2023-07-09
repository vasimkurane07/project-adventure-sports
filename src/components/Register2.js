import React, { useState } from 'react';
import './Register2.css';
import axios from 'axios';

function Register2() {
    const [user, setUser] = useState({
       
        email: "",
        password: "",
        firstName:"",
        lastName:"",
      });

      let setfname=(e)=>{
        let newuser = { ...user, firstName: e.target.value };
    setUser(newuser);
      }

      let setlname=(e)=>{
        let newuser = { ...user, lastName: e.target.value };
    setUser(newuser);
      }
      let setemail=(e)=>{
        let newuser = { ...user, email: e.target.value };
    setUser(newuser);
      }

      let setpassword=(e)=>{
        let newuser = { ...user, password: e.target.value };
    setUser(newuser);
      }
   function handleSubmit(){
    console.log(user);
    let url = 'http://localhost:7000/register';
    axios.post(url, user).then((response) => {
        console.log(response.data);   })
  alert("registeration Successfull");
 
  
};

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form >
        <label htmlFor="name">FirstName:</label>
        <input className='name'
          type="text"
          id="name"
          value={user.firstName}
          onChange={setfname}
          placeholder="Your FirstName"
          required
        />
         <label htmlFor="LastName">LastName:</label>
        <input className='name'
          type="text"
          id="lastname"
          value={user.lastName}
          onChange={setlname}
          placeholder="Your lastname"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={setemail}
          placeholder="Your email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={setpassword}
          placeholder="Your password"
          required
        />

<button type="submit" className="mt-4 btn btn-primary"onClick={handleSubmit}>
              Submit
            </button >
      </form>
    </div>
  );
}

export default Register2;
