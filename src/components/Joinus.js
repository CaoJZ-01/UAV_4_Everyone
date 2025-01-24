import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Chat from "./Chat";
import Title from "./Title";
import "./Joinus.css";


function Joinus() {
    return (
      <div className="home-container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="title">
          <Title text="Join Us" />
        </div>
        <div className="joinus-container">
          <div className="knowmore-card">
            <div className="joinus-text">
              Interested in what we do ?
              <br/>
              Do you find everyting you seen so far interesting!!!
              <br/>
              You can contribute to this work.
              <br/>
              if not contact professor Miodrag for more interesting projects.
              <br/>
              Dr.Miodrag Bolic Email: Miodrag.Bolic@uottawa.ca
              <br/>
              if you have any suggestions for the website you can contact our 
              web developers. 
              <br/>
              Let's build and learn together!!!
              <br/>
              <br/>
              <p className="joinus-slogan">
                Find out what other researchers are up to and potential collaborators by using below chat.
              </p>
            </div>
            <Chat />
          </div>
        </div>
      </div>
    </div>

      // <div>
      //   <Navbar /> {/* Include the Navbar component */}
      //   <Multiplelinebreaks count={4} />
      //   <div className="Joinus-container">
      //     <div className="knowmore-card">
      //       <h1>Interested in what we do ??</h1>
      //       <p>
      //       Do you find everyting you seen so far interesting!!!
      //       <br/>
      //           You can contribute to this work.
      //           <br/>
      //           if not contact professor Miodrag for more interesting projects.
      //           <br/>
      //           Dr.Miodrag Bolic Email: Miodrag.Bolic@uottawa.ca
      //           <br/>
      //           if you have any suggestions for the website you can contact our 
      //           web developers. 
      //           <br/>
      //           Let's build and learn together!!!
      //           <br/>
      //           <br/>
      //           <p className="small-bold-text">
      //             Find out what other researchers are up to and potential collaborators by using below chat.
      //           </p>
      //       </p>
      //       <Chat />
      //     </div>
      //   </div>
      // </div>
    );
  }
  
  export default Joinus;