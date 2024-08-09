import React, { useState, useEffect } from 'react';
import "./NavbarStyles.css";
import Jtel from './Assets/images/Jtel.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Nav() {

  return (
    <div>
      <nav>
        <div className='div1'>
          <ul className='navbar'>
            <li><img src={Jtel}alt="Logo"/></li>
            <li><a href='/mobile'>Recharge</a></li>
            <li><a href='/true5G'>True 5G</a></li>
            <li><a href='/jtelfiber'>Jtel Fiber</a></li>
            <li><a href='/airfiber'>AirFiber</a></li>
            <li><a href='/business'>Business</a></li>
            <li><a href='devices'>Devices</a></li>
            <li><a href='apps'>Apps</a></li>
            <li><a href='support'>Support</a></li>
            <li className='loginicon'><a href='/login'><AccountCircleIcon/></a></li>
          </ul>
        </div>
      </nav> 
    </div>
  )
}
