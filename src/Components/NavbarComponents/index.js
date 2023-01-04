import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.scss'
export default function NavbarComponents() {
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <>
      <div className='navbar-container'>
        <div className='navbar'>
          <div className='navbar-logo'>
            <b><NavLink to={"/"} href='/'>Start Bootstarp</NavLink></b>
          </div>
          <div className='navbar-menu'>
            <ul>
              <li>
                <b><NavLink to={"/"}>HOME</NavLink></b>
              </li>
              <li>
                <b><NavLink to={"about"}>ABOUT</NavLink></b>
              </li>
              <li>
                <i className='fa-brands fa-github'></i>
              </li>
            </ul>
          </div>
          <div className='navbar-hamb-menu'>
            <i class="fa-solid fa-bars" onClick={myFunction}></i>
          </div>
        </div>
      </div>
      {/* Yazdım alınmadı */}
      {/* <div className='mobilenav' id='myLinks'>
        <Link to={"/"}><a><h5>HOME</h5></a></Link>
        <Link to={"about"}><a><h5>ABOUT</h5></a></Link>
        <i className='fa-brands fa-github'></i>
      </div> */}
      {/* Yazdım alınmadı */}

    </>
  )
}
