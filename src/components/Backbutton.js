import React from "react";
import { Link } from "react-router-dom";
import "./Backbutton.css";

function Backbutton() {
  return (
    <Link to="/">
      <button className="back-button">Go Back</button>
    </Link>
  );
}

export default Backbutton;
