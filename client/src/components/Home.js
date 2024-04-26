import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className='card-container'>
        <div className='card'>
          {/* <h2>Admin Login</h2> */}
          <Link to="/adminreg"><h2>Admin Login</h2></Link>
        </div>
        <div className='card'>
          {/* <h2>Customer Login</h2> */}
          <Link to="/login"><h2>Customer Login</h2></Link>
        </div>
      </div>
    </div>
  );
}
