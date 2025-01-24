import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Multiplelinebreaks from "./Mulitplelinebreaks";
import "./Modal.css";
import Driftbox from "./Driftbox";
import Powerlinesbox from "./Powerlinesbox";
import "./Datasets.css";
import Backbutton from "./Backbutton";

function Datasets() {
  return (
    <div className="home-container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="title">
          <Title text="Datasets" />
        </div>
        <div className="datasets-container">
          <h2 className="dataset-title">Powerlines Datasets</h2>  
          <Powerlinesbox />
          <Multiplelinebreaks count={1} />
          <h2 className="dataset-title">Drones Datasets</h2>  
          <Driftbox />
          <Multiplelinebreaks count={4} />
        </div>
      </div>
    </div>
  );
}

export default Datasets;
