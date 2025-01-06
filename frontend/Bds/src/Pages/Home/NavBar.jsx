import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
  useEffect(() => {
    const w3Css = document.createElement("link");
    w3Css.rel = "stylesheet";
    w3Css.href = "https://www.w3schools.com/w3css/4/w3.css";
    document.head.appendChild(w3Css);

    const latoFont = document.createElement("link");
    latoFont.rel = "stylesheet";
    latoFont.href = "https://fonts.googleapis.com/css?family=Lato";
    document.head.appendChild(latoFont);

    const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    document.head.appendChild(fontAwesome);

    return () => {
      document.head.removeChild(w3Css);
      document.head.removeChild(latoFont);
      document.head.removeChild(fontAwesome);
    };
  }, []);

  const toggleMenu = () => {
    const navDemo = document.getElementById("navDemo");
    if (navDemo.className.indexOf("w3-show") === -1) {
      navDemo.className += " w3-show";
    } else {
      navDemo.className = navDemo.className.replace(" w3-show", "");
    }
  };

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-black w3-card navbar-main">
          <a
            href="javascript:void(0)"
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right"
            onClick={toggleMenu}
          >
            <i className="fa fa-bars"></i>
          </a>
          <Link to="/" className="w3-bar-item w3-button w3-padding-large">
            Home
          </Link>
          <Link
            to="/about"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            About
          </Link>
          <Link
            to="/login"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            Login
          </Link>
          <a
            href="https://www.sathyabama.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red w3-right"
          >
            <i className="fa fa-graduation-cap"></i>
          </a>
        </div>
      </div>

      <div
        id="navDemo"
        className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium"
      >
        <a href="/about" className="w3-bar-item w3-button" onClick={toggleMenu}>
          About
        </a>
        <a href="/login" className="w3-bar-item w3-button" onClick={toggleMenu}>
          Login
        </a>
      </div>
    </>
  );
}

export default Navbar;
