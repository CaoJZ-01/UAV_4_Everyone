import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Intro from "./Intro";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="title">
          <Title text="UAV 4 EVERYONE" />
        </div>
        <div className="intro">
          <Intro />
        </div>
      </div>
    </div>
  );
}

export default Home;
