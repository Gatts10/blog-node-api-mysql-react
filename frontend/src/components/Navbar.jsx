import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link to="/?category=art" className="link">
            <h6>ART</h6>
          </Link>
          <Link to="/?category=science" className="link">
            <h6>SCIENCE</h6>
          </Link>
          <Link to="/?category=technology" className="link">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to="/?category=cinema" className="link">
            <h6>CINEMA</h6>
          </Link>
          <Link to="/?category=design" className="link">
            <h6>DESIGN</h6>
          </Link>
          <Link to="/?category=food" className="link">
            <h6>FOOD</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
