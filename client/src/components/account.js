import React, { useState, useEffect } from 'react';
import './account.css';
import acc from '../Assests/acc-img.png';

function Account() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/user'); // Assuming you have an API endpoint to fetch user data
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      setUserData(userData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
   window.location.href='/login'
  };

  return (
    <div className='account'>
      <div className='left'>
        <h1>My Account</h1>
        <img src={acc} alt="Account" className="acc-img" /><br />
        {userData ? <i><p>Welcome {userData.name}!!</p></i> : <p>Loading user data...</p>}
      </div>
      <div className='right'>
        <h1>Name: {userData ? userData.name : 'Username'}</h1>
        <h1>Email: {userData ? userData.email : 'Email'}</h1>
        <h1>Password: *********</h1>
        <button className='logout' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Account;
