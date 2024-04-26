import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';

export default function Login() {
   const [email,setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(""); 
   const navigate = useNavigate(); // Add parentheses to useNavigate

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:7000/login', { email, password })
         .then(result => {
            console.log(result)
            if(result.data==="Success"){
               navigate('/Template');
            // window.location.href = '/Template'; 
            }
         // Navigate to '/template' on successful login
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
      <div className='login'>
         <nav className='logsin'>
            <ul className='unlist'>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        </ul>
        </nav>
         <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
               <div className="user-box">
                  <input type="text" onChange={(e) => setEmail(e.target.value)} name="username" required />
                  <label>Username</label>
               </div>
               <div className="user-box">
               {error && <p style={{ color: 'red' }}>{error}</p>}<br></br>
                  <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" required />
                  <label>Password</label>
               </div>
               <button type="submit">Login</button>
            </form>
         </div>
          <h4>Don't have an account? <Link to='/signup' className='sinback'>Signup</Link></h4> 
      </div>
   );
}
