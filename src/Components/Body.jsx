import React from "react";
import './Body.css';
import Image1 from './Image1'
import True5G from "./True5G";
import JtelFiber from "./JtelFiber";
import AirFiber from "./AirFiber";
import Business from "./Business";
import Devices from "./Devices";
import Apps from "./Apps";
import Page from "./Page";
import Supports from "./Supports";
import AdminDashboard from "./AdminDashboard";
import Airtel from "./Airtel";
import Jio from "./Jio";
import BSNL from "./BSNL";
const Body=()=>{
    return(
        <div className="body">
            <Page/>
            <Image1/>
            <True5G/>
            <JtelFiber/>
            <AirFiber/>
            <Business/>
            <Devices/>
            <Apps/>
            <Supports/>
            <AdminDashboard/>
            <Airtel/>
            <Jio/>
            <BSNL/>
        </div>
    )
}

export default Body;