import React, { useState, useEffect } from "react";
import MenuContent from "./MenuContent";
import './Navbar.css';

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


  return (
    <>
      <div className="offcanvas offcanvas-start" id="demo">
        <MenuContent/>
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
