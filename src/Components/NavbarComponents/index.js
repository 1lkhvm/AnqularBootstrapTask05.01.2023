import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'
export default function NavbarComponents() {
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
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </>
  )
}
