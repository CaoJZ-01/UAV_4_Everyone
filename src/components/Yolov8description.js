import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Title from "./Title";
import "./Modeldescription.css";


function Yolov8descriptions() {
    return (
      <div className="home-container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="title">
          <Title text="Yolo V8 Detection" />
        </div>
        <div className="modeldescription-container">
          <h1 className="modeldescription-title">Yolo V8: How we did it ?</h1>
          <br/>
          <p className="modeldescription-paragraph">
            YOLOv8 is a powerful object detection algorithm that can be used for detecting and 
            classifying insulation faults on transmission line insulator strings based on computer vision.
            It not only detects defects in the insulators of power transmission lines but also adds the 
            identification of birds' nests, making it suitable for various real-world scenarios such as 
            autonomous vehicles, surveillance systems, and power line inspection.
          </p>
          <p className="modeldescription-paragraph">
            Advantages of using YOLOv8 in this context include its ability to detect and classify insulation 
            faults with high accuracy, faster inference speeds, and support for various backbones, such as 
            EfficientNet, ResNet, and CSPDarknet. Additionally, YOLOv8 provides pre-trained models for easy 
            use and transfer learning on various datasets, making it suitable for detecting defects in power 
            line insulators. The model also offers advanced data augmentation techniques and a highly customizable 
            architecture that allows users to modify the model's structure and parameters to suit their specific needs.
          </p>
          <p className="modeldescription-paragraph">
            Some potential setbacks of using YOLOv8 for detecting defects in power line insulators include the 
            difficulty in training and slow detection speed for small-object detection in UAV aerial photography scenarios.
            Despite these setbacks, YOLOv8 remains a state-of-the-art model that offers unprecedented speed and accuracy for 
            detecting defects in power line insulators, making it a valuable tool for automated UAV power line inspection 
            and maintenance.
          </p>
        </div>
      </div>
    </div>

      // <div>
      //   <Navbar /> {/* Include the Navbar component */}
      //   <Multiplelinebreaks count={4} />
      //   <div className="yolov8description-container">
      //     <div className="knowmore-card">
      //       <h1 className="big-bold-text">YoloV8</h1>
      //       <p>
      //         How we did it ??
      //         <br/>
      //         YOLOv8 is a powerful object detection algorithm that can be used for detecting and 
      //         classifying insulation faults on transmission line insulator strings based on computer vision.
      //         It not only detects defects in the insulators of power transmission lines but also adds the 
      //         identification of birds' nests, making it suitable for various real-world scenarios such as 
      //         autonomous vehicles, surveillance systems, and power line inspection.
      //         <br/>
      //         Advantages of using YOLOv8 in this context include its ability to detect and classify insulation 
      //         faults with high accuracy, faster inference speeds, and support for various backbones, such as 
      //         EfficientNet, ResNet, and CSPDarknet. Additionally, YOLOv8 provides pre-trained models for easy 
      //         use and transfer learning on various datasets, making it suitable for detecting defects in power 
      //         line insulators. The model also offers advanced data augmentation techniques and a highly customizable 
      //         architecture that allows users to modify the model's structure and parameters to suit their specific needs.
      //         <br/>
      //         Some potential setbacks of using YOLOv8 for detecting defects in power line insulators include the 
      //         difficulty in training and slow detection speed for small-object detection in UAV aerial photography scenarios.
      //         Despite these setbacks, YOLOv8 remains a state-of-the-art model that offers unprecedented speed and accuracy for 
      //         detecting defects in power line insulators, making it a valuable tool for automated UAV power line inspection 
      //         and maintenance.
      //       </p>
      //     </div>
      //   </div>
      // </div>
    );
  }
  
  export default Yolov8descriptions;