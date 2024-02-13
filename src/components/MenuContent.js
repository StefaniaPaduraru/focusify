import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaHome } from "react-icons/fa";
import './Navbar.css';

function MenuContent() {
  return (
    <>
        <Link to="/" className="navbar-brand">
               Focusify
        </Link>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-dark" type="button">
            Search
          </button>
        </form>
        <div className="container-fluid">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <Link to="/home" className="nav-link nav-tabs nav-justified">
              <FaHome /> Home 
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/calendar" className="nav-link nav-tabs nav-justified">
               <FaCalendarAlt /> Calendar
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/pomorodo" className="nav-link nav-tabs nav-justified">
            <FaClock /> Pomorodo
              </Link>
            </li>
          </ul>
        </div>
        </>
  );
}
export default MenuContent;