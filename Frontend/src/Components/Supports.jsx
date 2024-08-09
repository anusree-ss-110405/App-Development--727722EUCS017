import React from 'react';
import { Link } from 'react-router-dom';
import './support.css';
import p1 from './Assets/images/p1.jpg'; 
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import CallIcon from '@mui/icons-material/Call';
import SimCardIcon from '@mui/icons-material/SimCard';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CustomerSupport from './CustomerSupport';

export default function Supports() {
  return (
    <div className="container">
      <div className="left">
        <div className="image-container">
          <img src={p1} alt="JTEL Support" />
          <div className="hover-text">WELCOME TO JTEL SUPPORT</div>
        </div>
      </div>
      <div className="right">
        <ul>
          <li><a href='/history'><ManageHistoryIcon/></a>History</li>
          <li><a href='/login'><NetworkWifiIcon/></a>Data Used</li>
          <li><a href='/login'><CallIcon/></a>Calls</li>
          <li>
            <ContactSupportIcon/>
            <Link to='/customersupport'><span>Queries</span></Link>
          </li>
          <li><a href='/login'><SimCardIcon/></a>Lost SIM</li>
        </ul>
      </div>
    </div>
  );
}
