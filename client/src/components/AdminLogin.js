import React,{useState} from 'react'
import './AdminLogin.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function AdminLogin() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const navigate=useNavigate('')
    const eventhandler = (e)=>{
e.preventDefault();
axios.post('https://localhost:7000/adminlogin',{username,password})
.then(result=>{
    console.log(result)
    if(result.data==="Sucess"){
        navigate('/admin')
    }
})
.catch(err => {
    // Check if the error is due to email already in use
    if (err.response && err.response.data && err.response.data.error) {
       setError(err.response.data.error); // Set error state with the error message
    } else {
       console.log(err); // Log other types of errors to the console
    }
 });
    }
  return (
    <div className='page'>
    <div>
        <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
            <center><h1>Login</h1></center>
        <form className='form' onSubmit={eventhandler}>
            <label>Username:</label><br></br>
            <input name='username' onChange={(e)=>setUsername(e.target.value)}></input><br></br>
            <label>Password:</label><br></br>
            <input name='password' onChange={(e)=>setPassword(e.target.value)}></input><br></br>
            <button type='submit'>Login</button>
        </form>
        </div>
        </div>
    </div>
  )
}
