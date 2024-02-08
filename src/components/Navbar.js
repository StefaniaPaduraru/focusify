import React, { useState, useEffect } from "react";
import MenuContent from "./MenuContent";

function NavBar() {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth > 868);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className="offcanvas offcanvas-start" id="demo">
        <MenuContent/>
      </div>

      <nav className="navbar flex-column justify-content-start align-items-start">
        {window.innerWidth <= 868 ? (
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        ) : (
          <React.Fragment>
            <MenuContent/>
          </React.Fragment>
        )}
      </nav>
    </>
  );
}

export default NavBar;
