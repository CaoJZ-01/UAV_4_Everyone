import React from "react";
import uOlogo from "../assets/uOttawa_HOR_BLACK_2021.svg";
import { Link } from "react-router-dom"; // Import Link
import { NavLink } from "react-router-dom"; // Import NavLink
import './Navbar.css';

function Navbar() {
  return (
    <div className="sidebar">
      <h2>UAV 4 EVERYONE</h2>
      <ul>
      <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li> {/* Use Link to navigate to the "About" page */}
            <li>
              <a href="http://localhost:8501/" target="blank">
              Detection Algorithm
              </a>
            </li>
            <li><Link to="/datasets">Datasets</Link></li> {/* Include the Datasets link */}
            <li><Link to= "/Knowmore">Know more</Link></li>
            <li><Link to= "/Modelandmetrics">Metrics</Link></li>
            <li><Link to= "/Joinus">Join us</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
