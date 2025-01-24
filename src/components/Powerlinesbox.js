import React from 'react';
import './Powerlinesbox.css'; // Import the CSS file for styling
import { Link } from "react-router-dom";

const Powerlinesbox = () => { 
  const Tablerender = () => {
    // You can replace the '/' with the actual route where you want to display the SAM Model text
    window.location.href = '/Tablerender';
  };

  return (
    <div className="powerlines-box" onClick={Tablerender}>
      <div className="text-container-powerlines">
        <div className="powerlines-text">
          {/*<Link to="/Tablerender" className="open-table-link">Powerlines Datasets</Link> */}
          <a href="/Tablerender" className={`open-table-link`}>Download & Know More About Powerlines Datasets</a>
        </div>
      </div>
    </div>
  );
};

export default Powerlinesbox;