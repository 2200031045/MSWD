import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Signup() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(""); 
   const [successMessage, setSuccessMessage] = useState(""); 
   const navigate = useNavigate(); // Use useNavigate for programmatic navigation

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:7000/signup', { name, email, password })
         .then(result => {
            console.log(result);
            setSuccessMessage("Signup successful! Redirecting to login page...");
            setTimeout(() => {
               navigate('/login'); // Use navigate to navigate to '/template' after successful signup
            }, 2000);
         })
         .catch(err => {
            if (err.response && err.response.data && err.response.data.error) {
               setError(err.response.data.error);
            } else {
               console.log(err);
            }
         });
   };

   return (
      <div className='signup'>
         <nav className='logsin'>
            <ul className='unlist'>
               <li><Link to="/login">Login</Link></li>
               <li><Link to="/signup">Signup</Link></li>
            </ul>
         </nav>
         {successMessage && <p className='sucess' >{successMessage}</p>}
         <div className="sign-box">
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
               <div className="user-box">
                  <input type="text" onChange={(e) => setName(e.target.value)} name="name" required />
                  <label>Username</label>
               </div>
               <div className="user-box">
                  <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" required />
                  <label>Email</label>
               </div>
               <div className="user-box">
                  <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" required />
                  <label>Password</label>
               </div>
               {error && <p style={{ color: 'red' }}>{error}</p>}
               <button type="submit">Signup</button>
            </form>
         </div>
      </div>
   );
}
