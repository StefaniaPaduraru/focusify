import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";
import MenuContent from "./MenuContent";
import './Navbar.css';
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaHome } from "react-icons/fa";
import logo from '../images/logo.png'

function NavBar() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 868);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 868);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/focusify/search?query=${searchTerm}`);
    }
  };
  return (
    <>
      <div className="offcanvas offcanvas-start" id="demo">
      <Link to="/focusify" className="navbar-brand" >
              <img src={logo} alt="Logo" style={{ width: 200}} data-bs-dismiss="offcanvas"/>
        </Link>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            className="form-control me-2"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <Button variant="dark" type="submit" data-bs-dismiss="offcanvas">
            Search
          </Button>
        </Form>
        <div className="container-fluid">
          <ul className="navbar-nav flex-column">
            <li className="nav-item" style={{ width: 200}} data-bs-dismiss="offcanvas">
              <Link to="/focusify/home" className="nav-link nav-tabs nav-justified">
              <FaHome /> Home 
              </Link>
            </li>
            <li className="nav-item" style={{ width: 200}} data-bs-dismiss="offcanvas">
            <Link to="/focusify/calendar" className="nav-link nav-tabs nav-justified">
               <FaCalendarAlt /> Calendar
              </Link>
            </li>
            <li className="nav-item" style={{ width: 200}} data-bs-dismiss="offcanvas">
            <Link to="/focusify/pomodoro" className="nav-link nav-tabs nav-justified">
            <FaClock /> Pomodoro
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className="navbar flex-column justify-content-start align-items-start">
        {isLargeScreen ? (
          <React.Fragment>
            <MenuContent/>
          </React.Fragment>
        ) : (
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}
      </nav>
    </>
  );
}

export default NavBar;
