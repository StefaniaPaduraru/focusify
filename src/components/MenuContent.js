import React from "react";

function MenuContent() {
  return (
    <>
    <a className="navbar-brand" href="#">
          Logo
        </a>
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
              <a className="nav-link nav-tabs nav-justified" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-tabs nav-justified" href="#">
                Calendar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-tabs nav-justified" href="#">
                Pomodoro
              </a>
            </li>
          </ul>
        </div>
        </>
  );
}
export default MenuContent;