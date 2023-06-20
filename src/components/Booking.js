import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Register.css";
function Booking() {
  const [booking, setBooking] = useState({
    date: "",
    fname: "",
    lname: "",
    mobile: "",
    members: "",
    cmembers: "",
  });
  let [sucessBox, setSuccessBox] = useState(false);

 
  let setVisitDate = (e) => {
    let newbooking = { ...booking, date: e.target.value };
    setBooking(newbooking);
  };
  let setFirstName = (e) => {
    let newbooking = { ...booking, fname: e.target.value };
    setBooking(newbooking);
  };
  let setLastName = (e) => {
    let newbooking = { ...booking, lname: e.target.value };
    setBooking(newbooking);
  };
  let setMobileNo = (e) => {
    let newbooking = { ...booking, mobile: e.target.value };
    setBooking(newbooking);
  };
  let setAdultMembers = (e) => {
    let newbooking = { ...booking, members: e.target.value };
    setBooking(newbooking);
  };
  let setChildMembers = (e) => {
    let newbooking = { ...booking, cmembers: e.target.value };
    setBooking(newbooking);
  };
  const handleFormSubmit = async() => {
    let url = `http://localhost:4000/booking?date=${booking.date}&fname=${booking.fname}&lname=${booking.lname}&mobile=${booking.mobile}&members=${booking.members}&cmembers=${booking.cmembers}`;
  await fetch(url);
  alert("Booking Successfull");
 
  setSuccessBox(true);
  setTimeout(() => {
    setSuccessBox(false);
  }, 5000);
};
  

  return (
    <div className="row fitting d-flex justify-content-center m-0">
      <h1>Lets Dive into the Nature</h1>
      {sucessBox && (
        <div className="alert alert-dark">Operation Success</div> )}
          
      <div className="col-md-6 col-sm-12 col-fit">
        <h2>Book Now</h2>
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
                value={booking.fname}
                onChange={setFirstName}
                required
                className="form-control form-control-lg"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Last Name:</label>
              <input
                type="text"
                value={booking.lname}
                onChange={setLastName}
                required
                className="form-control form-control-lg"
              />
            </div>
            <div className="col">
              <label>Mobile No:</label>
              <input
                type="tel"
                value={booking.mobile}
                onChange={setMobileNo}
                required
                className="form-control form-control-lg"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>No of Members - Adults:</label>
              <input
                type="number"
                min="1"
                value={booking.members}
                onChange={setAdultMembers}
                required
                className="form-control form-control-lg"
              />
            </div>
            <div className="col">
              <label>No of Members - Children:</label>
              <input
                type="number"
                min="0"
                value={booking.cmembers}
                onChange={setChildMembers}
                required
                className="form-control form-control-lg"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="mt-4 btn btn-primary"onClick={handleFormSubmit}>
              Submit
            </button >
          </div>
        </form>
      
      </div>
    </div>
  );
}

export default Booking;
