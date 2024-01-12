import React from 'react'
import './NavBar.css'
import {Routes,Link}from 'react-router-dom'
function NavBar () {
  return (
    <div>
       

<nav class="navbar navbar-expand-sm bg-light">
<div class="container-fluid">
  <ul class="navbar-nav">
  <li class="nav-item"><Link to="/">Home</Link></li>

   
    <li class="nav-item"><Link to="/about">About</Link></li>
<li class="nav-item"><Link to="/contact">Contact</Link></li>

  </ul>
</div>
</nav>
</div>
  )
}

export default NavBar
