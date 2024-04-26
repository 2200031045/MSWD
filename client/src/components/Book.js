import React, { useState } from 'react';
import './Book.css';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
export default function Book() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:7000/Book', { name, email, checkInDate, checkOutDate, roomType })
      .then((result) => {
        console.log(result);
        navigate('/Payment');
        // Handle successful booking response here, such as showing a success message or redirecting
      })
      .catch(err => {
        // Check if the error is due to email already in use
        if (err.response && err.response.data && err.response.data.error) {
           setError(err.response.data.error); // Set error state with the error message
        } else {
           console.log(err); // Log other types of errors to the console
        }
     });
  };

  return (
    <div>
      <form className="forms" onSubmit={handleSubmit}>
        <h2>Hotel Room Booking</h2>
        <div className="inputs">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} required />
        </div>
        
        <div className="inputs">
        {error && <p style={{ color: 'red' }}>{error}</p>}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="inputs">
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input type="date" id="checkInDate" name="checkInDate" onChange={(e) => setCheckInDate(e.target.value)} required />
        </div>
        <div className="inputs">
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input type="date" id="checkOutDate" name="checkOutDate" onChange={(e) => setCheckOutDate(e.target.value)} required />
        </div>
        <div className="inputs">
          <label htmlFor="roomType">Room Type:</label>
          <select id="roomType" name="roomType" onChange={(e) => setRoomType(e.target.value)} required>
            <option value="">Select Room Type</option>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <button type="submit">Book</button>
      </form>
      <Link to="/template" className="back">
        Back
      </Link>
    </div>
  );
}
