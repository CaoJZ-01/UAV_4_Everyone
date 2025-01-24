import React from 'react';
import './Driftbox.css'; // Import the CSS file for styling
import { Link } from "react-router-dom";

const Driftbox = () => {
  const Tablerender = () => {
    // You can replace the '/' with the actual route where you want to display the SAM Model text
    window.location.href = '/Tablerender';
  };

  return (
    <div className="drift-box" onClick={Tablerender}>
      <div className="text-container-drift">
        <div className="drift-text">
          <Link to="/Tablerender" className="open-table-link">Download & Know More About Drones Datasets</Link>
        </div>
      </div>
    </div>
  );
};

export default Driftbox;

