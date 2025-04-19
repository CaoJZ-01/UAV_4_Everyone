import React from 'react';
import './Driftbox.css'; // Import the CSS file for styling
import { Link } from "react-router-dom";

const Driftbox = () => {
  const Tablerenderdrone = () => {
    // You can replace the '/' with the actual route where you want to display the SAM Model text
    window.location.href = '/Tablerenderdrone';
  };

  return (
    <div className="drift-box" onClick={Tablerenderdrone}>
      <div className="text-container-drift">
        <div className="drift-text">
          <Link to="/Tablerenderdrone" className="open-table-link">Download & Know More About Drones Datasets</Link>
        </div>
      </div>
    </div>
  );
};

export default Driftbox;

