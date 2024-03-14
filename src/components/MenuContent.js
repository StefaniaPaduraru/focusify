import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaHome } from "react-icons/fa";
import './Navbar.css';
import logo from '../images/logo.png'
import SearchBar from "./SearchBar";


function MenuContent() {
  return (
    <>
        <Link to="/focusify" className="navbar-brand">
              <img src={logo} alt="Logo" style={{ width: 200}}/>
        </Link>
        <SearchBar/>
        <div className="container-fluid">
          <ul className="navbar-nav flex-column" >
            <li className="nav-item" style={{ width: 200}}>
              <Link to="/focusify/home" className="nav-link nav-tabs nav-justified">
              <FaHome /> Home 
              </Link>
            </li>
            <li className="nav-item" style={{ width: 200}}>
            <Link to="/focusify/calendar" className="nav-link nav-tabs nav-justified">
               <FaCalendarAlt /> Calendar
              </Link>
            </li>
            <li className="nav-item" style={{ width: 200}}>
            <Link to="/focusify/pomodoro" className="nav-link nav-tabs nav-justified">
            <FaClock /> Pomodoro
              </Link>
            </li>
          </ul>
        </div>
        </>
  );
}
export default MenuContent;