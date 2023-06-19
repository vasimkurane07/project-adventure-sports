import React, { useState } from 'react';

function Booking() {
  const [visitDate, setVisitDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [adultMembers, setAdultMembers] = useState(1);
  const [childMembers, setChildMembers] = useState(0);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your logic for form submission here
  };

  return (
    <div>
      <h2>Book Now</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Visit Date:</label>
          <input
            type="date"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
            required
            className='form-lg form-control-lg'
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className='form-lg form-control-lg'
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mobile No:</label>
          <input
            type="tel"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>No of Members - Adults:</label>
          <input
            type="number"
            min="1"
            value={adultMembers}
            onChange={(e) => setAdultMembers(e.target.value)}
            required
          />
        </div>
        <div>
          <label>No of Members - Children:</label>
          <input
            type="number"
            min="0"
            value={childMembers}
            onChange={(e) => setChildMembers(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Booking;