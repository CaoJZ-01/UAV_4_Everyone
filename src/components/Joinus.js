import React from "react";
import Navbar from "./Navbar";
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
        <div className="joinus-title">
          <Title text="Join Us" />
        </div>
        <div className="joinus-container">
          <div className="joinus-card">
            <div className="joinus-text">
              <h2>Interested in what we do?</h2>
              <p>
                Do you find everything you've seen so far interesting? You can contribute to this work!
              </p>
              <p>
                Not interested? Contact Professor Miodrag for more exciting projects:
                <br />
                <strong>Email:</strong> <a href="mailto:Miodrag.Bolic@uottawa.ca">Miodrag.Bolic@uottawa.ca</a>
              </p>
              <p>
                Have suggestions for the website? Reach out to our web developers. Let's build and learn together!
              </p>
              <button
                className="cta-button"
                onClick={() => {
                  window.location.href = "mailto:Miodrag.Bolic@uottawa.ca";
                }}
                >
                Contact Us
              </button>
            </div>
            <div className="joinus-slogan">
              <p>
                Find out what other researchers are up to and potential collaborators by using the chat below.
              </p>
            </div>
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Joinus;