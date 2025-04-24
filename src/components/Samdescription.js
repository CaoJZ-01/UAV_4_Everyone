import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Title from "./Title";
import "./Modeldescription.css";


function Samdescription() {
    return (
      <div className="home-container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="title">
          <Title text="SAM Model" />
        </div>
        <div className="modeldescription-container">
          <h1 className="modeldescription-title">SAM Model: How we use it in the project ?</h1>
          <br/>
          <p className="modeldescription-paragraph">
            Flexibility and repeated review: SAM allows for repeated reviewing, which provides many opportunities 
            to communicate changes or feedback, making it suitable for adapting to the evolving requirements of
            power lines segmentation.
          </p>
          <p className="modeldescription-paragraph">
            Rapid feedback and development: The model elicits feedback from all interested parties, 
            facilitating the design and development of power lines segmentation rapidly.
          </p>
          <p className="modeldescription-paragraph">
            Collaboration and iterative approach: SAM encourages collaboration and an iterative approach, 
            enabling designers to test power lines segmentation early and often and be agile in response to 
            user feedback.
          </p>
          <p className="modeldescription-paragraph">
            Repetitive in nature: SAM involves frequent repetition of steps, which may not align well with 
            environments that do not encourage rapid feedback or flexible processes.
          </p>
          <p className="modeldescription-paragraph">
            Time-consuming: The model can be time-consuming and may require significant resources, 
            especially if the project does not necessitate the level of review provided by SAM.
          </p>
        </div>
        
      </div>
    </div>
    );
  }

  
  export default Samdescription;