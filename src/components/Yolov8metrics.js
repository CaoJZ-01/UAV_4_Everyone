// Yolov8metrics.js
import React from "react";
import PropTypes from "prop-types";
import "./Yolov8metrics.css"; // Import your Yolov8metrics component styles
import cm from "./Images/confusionmatrix.png"
import f1 from "./Images/F1 confidence curve.jpeg";
import "./Yolov8metrics.css";

const Yolov8metrics = ({ title, content, images }) => {
  return (
    <div className="yolov8metrics-container">
      <h2 className="model-title">{title}</h2>
      <p className="description-text">{content}</p>
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={` ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="text-container-y">
        <h3 className="model-result">Train Box Loss: 1.283</h3>
        <h3 className="model-result">MAP score: 0.593</h3>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Parameters</th>
              <th>Values</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {/* Repeat this row 10 times for the 10 rows */}
            <tr>
              <td>Epochs</td>
              <td>75</td>
            </tr>
            {/* Add more rows as needed */}
            <tr>
              <td>Batch Size</td>
              <td>32</td>
            </tr>
            <tr>
              <td>Image Size</td>
              <td>640x640</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>YoloeV8n-seg</td>
            </tr>
            <tr>
              <td>GPU</td>
              <td>Tesla T4</td>
            </tr>
            <tr>
              <td>Train Time</td>
              <td>145min 62sec</td>
            </tr>
            <tr>
              <td>Inference Time</td>
              <td>3.9ms</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bottom-images-container">
        {/* Add two more images here */}
        <div className="bottom-image-item">
          <img src= {cm} alt="i 1" />
        </div>
        <div className="bottom-image-item">
          <img src={f1} alt="I 2" />
        </div>
      </div>
    </div>
  );
};

Yolov8metrics.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Yolov8metrics;
