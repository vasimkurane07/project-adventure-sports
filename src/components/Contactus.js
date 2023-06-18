import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useRef, useState } from "react";

const Contactus = () => {
    let [sucessBox, setSuccessBox] = useState(false);
  let [obj, setUser] = useState({
    name: "",
    subject: "",
    email: "",
    number: "",
    message: "",
  });

  let takename = (e) => {
    let newobj = { ...obj, name: e.target.value };
    setUser(newobj);
  };

  let takesubject = (e) => {
    let newobj = { ...obj, subject: e.target.value };
    setUser(newobj);
  };

  let takeemail = (e) => {
    let newobj = { ...obj, email: e.target.value };
    setUser(newobj);
  };
  let takenumber = (e) => {
    let newobj = { ...obj, number: e.target.value };
    setUser(newobj);
  };

  let takemessage = (e) => {
    let newobj = { ...obj, message: e.target.value };
    setUser(newobj);
  };

  let login = async () => {
    let url = `http://localhost:4000/adduser?name=${obj.name}&subject=${obj.subject}&email=${obj.email}&number=${obj.number}&message=${obj.message}`;
    await fetch(url);

    let newobj = {
        name:"",
      subject: "",
      email: "",
      number: "",
      message: "",
    };
    setUser(newobj);
    setSuccessBox(true);
    setTimeout(() => {
      setSuccessBox(false);
    }, 5000);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4 font-weight-bold text-uppercase text-center">
            Contact us
          </h1>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-md-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60446.60087144362!2d73.37052284433969!3d18.757442614300487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be801098bdf8145%3A0x696b4a60a5e28658!2sLonavala%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687017448926!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-3 align-items-center">
          <i
            className="fa fa-map-marker fa-3x text-success mb-2"
            aria-hidden="true"
          ></i>
          <h3>Location</h3>
          <p>Lonavala, Maharashtra.</p>
          <i
            className="fa fa-phone fa-3x text-success mt-4"
            aria-hidden="true"
          ></i>
          <h3>Phone</h3>
          <p>+91-9587979697</p>
          <i
            className="fa fa-envelope fa-3x text-dark mt-4"
            aria-hidden="true"
          ></i>
          <h3>Email</h3>
          <p>info@gmail.com</p>
        </div>
      </div>
      <div className="col-md-12 pt-5">
        <h1 className="text-uppercase text-center">Contact Form</h1>
      </div>
      <h2 className="align-items-center"></h2>
      <div className="Contactus" style={{ backgroundColor: "transparent" }}>
        <div className="row">
          <div className="col-md-8">
            <span id="lblResponse" className="tab-content"></span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-4">
            <input
              name="tbname"
              type="text"
              id="tbname"
              className="form-control my-2"
              placeholder="Name"
              value={obj.name}
              onChange={takename}
            />
          </div>
          <div className="col-md-6 mt-4">
            <input
              name="tbSubject"
              type="text"
              id="tbSubject"
              className="form-control my-2"
              placeholder="Subject"
              value={obj.subject}
              onChange={takesubject}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <input
              name="tbEmail"
              type="text"
              id="tbEmail"
              className="form-control my-2"
              placeholder="Email"
              value={obj.email}
              onChange={takeemail}
            />
          </div>
          <div className="col-md-6">
            <input
              name="tbNumber"
              type="number"
              id="tbNumber"
              className="form-control my-2"
              placeholder="Contact Number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              maxLength="10"
              minLength="10"
              value={obj.number}
              onChange={takenumber}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <textarea
              name="tbMessage"
              id="tbMessage"
              cols="30"
              rows="10"
              className="form-control my-2"
              placeholder="Message"
              value={obj.message}
              onChange={takemessage}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input
              type="submit"
              name="btnSendMsg"
              value="SendMessage"
              id="btnSendMsg"
              onClick={login}
              className="btn btn-lg btn-submit btn-success"
            />
          </div>
        </div>
      </div>
      {sucessBox && (
        <div className="alert alert-success">Operation Success</div> )}
    </div>
  );
};

export default Contactus;
