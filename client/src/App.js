import React from 'react'
import './App.css'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
//  import Home from './components/Home'
import Template from './components/Template.js'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//  import {Link} from 'react-router-dom'
import account from './components/account.js'
import Book from './components/Book.js'
import Admin from './components/Admin.js'
// import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Payment from './components/Payment.js'
import AdminLogin from './components/AdminLogin.js'
import AdminReg from './components/AdminReg.js'
export default function App() {
  return (
    <div className='app'>
      
<Router>
      <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/adminlogin" exact Component={AdminLogin} />
      <Route path="/adminreg" exact Component={AdminReg} />
        <Route path="/login" exact Component={Login} />
        <Route path="/payment" exact Component={Payment} />
        <Route path="/Signup" exact Component={Signup} />
        <Route path="/Template" exact Component={Template} />
        <Route path="/account" exact Component={account} />
        <Route path="/Book" exact Component={Book} />
        <Route path="/Admin" exact Component={Admin} />
      </Routes>
    </Router>
    </div>
  )
}

