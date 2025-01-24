import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Imagecard from "./Imagecard";
import Multiplelinebreaks from "./Mulitplelinebreaks";
import './Knowmore.css'

function Knowmore() {
  // Function to navigate to a new page with SAM Model text
  const navigateToSAMText = () => {
    // You can replace the '/' with the actual route where you want to display the SAM Model text
    window.location.href = '/Samdescription';
  };
  const Yolov8Text = () => {
    // You can replace the '/' with the actual route where you want to display the SAM Model text
    window.location.href = '/Yolov8descriptions';
  };
  

  return (
    <div className="home-container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="title">
          <Title text="Know More" />
        </div>
        <div className="knowmore-container">
          <h1 className="knowmore-title">Know More</h1>
          <p className="knowmore-paragraph">
            If you want to know more about this project, you are at the right place.
            Here we are going to talk about how we utilized each model, their advantages, and drawbacks.
          </p>
 
          <h2 className="Yolov8-text">Yolo V8 Detection</h2>  
          <div className="Model-yolov8" onClick={Yolov8Text}>
            <div className="text-container-knowmore">
              <div className="Yolov8-open-link">Know more about Yolo V8</div>
            </div>
          </div>
          <Multiplelinebreaks count={1} />
          
          <h2 className="Yolov8-text">SAM Model</h2>
          <div className="Model-SAM" onClick={navigateToSAMText}>
            <div className="text-container-knowmore">
              <div className="sam-open-link">Know more about SAM</div>
            </div>
          </div>
        </div>
      </div>
    </div>


    // <div>
    //   <Navbar />
    //   <Multiplelinebreaks count={4} />
    //   <div className="knowmore-card">
    //     <h1 className="big-bold-text">Know More</h1>
    //     <p>
    //       If you want to know more about this project, you are at the right place.
    //       Here we are going to talk about how we utilized each model, their advantages, and drawbacks.
    //     </p>
    //   </div>
    //   <div className="Model-yolov8" onClick={Yolov8Text}>
    //     <div className="text-container-knowmore">
    //       <div className="Yolov8-text">Yolo V8 Detection</div>
    //       <div className="Yolov8-description">Know more about Yolo V8</div>
    //     </div>
    //   </div>
    //   <Multiplelinebreaks count={1} />
    //   {/* Clickable SAM Model component */}
    //   <div className="Model-SAM" onClick={navigateToSAMText}>
    //     <div className="text-container-knowmore">
    //       <div className="Yolov8-text">SAM Model</div>
    //       <div className="Yolov8-description">Know more about SAM</div>
    //     </div>
    //   </div>
    //   <Multiplelinebreaks count={4} />
    // </div>
  );
}

export default Knowmore;
