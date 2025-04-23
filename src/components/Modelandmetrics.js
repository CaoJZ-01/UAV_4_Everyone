// Modelandmetrics.js
import React from "react";
import Navbar from "./Navbar";
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Yolov8metrics from "./Yolov8metrics";
import SAM from "./SAM";
import Title from "./Title";
// import "./Modelandmetrics.css"; // Import your Modelandmetrics component styles
// import t_04 from "./Images/t_0.4.png";
import image from "./Images/image.png";
import mask from "./Images/mask.png";
import pmap from  "./Images/pmap.png";
import und from "./Images/yolonotdetected.jpeg";
import det from "./Images/yolodetected.jpeg" 
import "./Modelandmetrics.css";


function Modelandmetrics() {
  // Example array of image URLs
  const images = [
    image,
    mask,
    pmap,
  ];
  const images2 = [
    und,
    det,
  ];

  return (
    <div className="home-container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="title">
          <Title text="Parameters & Metrics" />
        </div>
        <div className="Modelandmetrics-container">
        <h1 className="metrics-title">Models and Metrics</h1>
          <p className="metrics-paragraph">
            This page provides a comprehensive overview of the various models and metrics used in our UAV portal. 
            Here, you will find detailed descriptions of each model, including their performance metrics, 
            accuracy rates, and other relevant data. The goal is to help users understand the strengths and 
            limitations of each model, enabling them to make informed decisions based on the provided metrics.
          </p>
          
          {/* Include the Yolov8metrics component with the images prop */}
          <Yolov8metrics title="Yolo V8 Model" content="Metrics related to Yolo V8 Model." images={images2} />
          <SAM title="SAM Model" content="Metrics related to SAM Model." images={images} />
          {/* Add more content as needed */}
        </div>
      </div>
    </div>

  );
}

export default Modelandmetrics;
