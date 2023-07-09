import React, { useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "./Book.css";
function Booking() {
  const [booking, setBooking] = useState({
    name:"",
    email:"",
    date:"",
    time:"",
    description:"",
  });
  let [sucessBox, setSuccessBox] = useState(false);

 
  let setVisitDate = (e) => {
    let newbooking = { ...booking, date: e.target.value };
    setBooking(newbooking);
  };
  let setFirstName = (e) => {
    let newbooking = { ...booking, name: e.target.value };
    setBooking(newbooking);
  };
  
  let setAdultMembers = (e) => {
    let newbooking = { ...booking, time: e.target.value };
    setBooking(newbooking);
  };
  let setChildMembers = (e) => {
    let newbooking = { ...booking, description: e.target.value };
    setBooking(newbooking);
  };
  let setEmail = (e) => {
    let newbooking = { ...booking, email: e.target.value };
    setBooking(newbooking);
  };
  function sendData(){
    console.log(booking);
    let url = 'http://localhost:7000/appointment';
    axios.post(url, booking).then((response) => {
        console.log(response.data);   })
  alert("Booking Successfull");
 
  setSuccessBox(true);
  setTimeout(() => {
    setSuccessBox(false);
  }, 5000);
};
  

  return (
    <div className="row fitting d-flex justify-content-center m-0">
      
      {sucessBox && (
        <div className="alert alert-dark md-4">Operation Success</div> )}
          <h1>talk with our best doctor</h1>
      <div className="col-md-6 col-sm-12 col-fit">
      
        <h2>Make a Appointment</h2>
        <form >
          <div className="row">
            <div className="col">
              <label>Visit Date:</label>
              <input
                type="date"
                value={booking.date}
                onChange={setVisitDate}
                required
                className="form-control form-control-lg"
              />
            </div>

            <div className="col">
              <label>First Name:</label>
              <input
                type="text"
                value={booking.name}
                onChange={setFirstName}
                required
                className="form-control form-control-lg"
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col">
              <label>Time</label>
              <input
                type="number"
                min="1"
                max="23"
                value={booking.time}
                onChange={setAdultMembers}
                required
                className="form-control form-control-lg"
              />
            </div>
            <div className="col">
            <label>Email</label>
            
              <input
                type="email"
                value={booking.email}
                onChange={setEmail}
                required
                className="form-control form-control-lg"
              />
            </div>
            
            
          </div>
          <div className="row mt-3">
          <div className="col">
              <label>description</label>
              <textarea id="w3review" name="w3review" rows="4" cols="50"  value={booking.description}
                onChange={setChildMembers} ></textarea>
            </div>
          </div>
          <div>
            <button type="submit" className=" btn btn-primary"onClick={sendData}>
              Submit
            </button >
          </div>
        </form>
      
      </div>
    </div>
  );
}

export default Booking;
