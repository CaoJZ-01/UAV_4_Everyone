// About.js
import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Profile from "./Profile";
import stockimage from "./Images/stock profile.jpeg";
import jinzhi from "./Images/jinzhi.jpeg";
import shyam from "./Images/shyam.jpeg";
import abhi from "./Images/abhi.jpeg";
import anuj from "./Images/anuj.jpeg";
import himagna from "./Images/himagna.jpeg";
import vishwa from "./Images/vishwa.jpeg";
import "./Profile.css"; 
import "./About.css";

function About() {
  return (
    <div className="home-container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="title">
          <Title text="About" />
        </div>
        <div className="about-container">
          <h1 className="about-title">About Us</h1>
          <p className="about-paragraph">
            This page is to show all the contributors of the project wanna join
            the list head to join us page
         </p>
         <Multiplelinebreaks count={1} />
         <div className="profile-row">
          {/* Two profile cards in a row */}
          <Profile
            imageSrc={stockimage}
            name="Dr.Miodrag Bolic"
            role="Project Guide"
            Department="ECE"
            email="Miodrag.Bolic@uottawa.ca"
          />
          <Profile 
            imageSrc={stockimage} 
            name="Fardad Dadbound" 
            role="Technical Instructor" 
            Department="ECE"
            email="fdadbound@uottawa.ca"
          />
          <Profile 
            imageSrc={jinzhi} 
            name="Jinzhi Cao" 
            role="Fullstack Developer"
            Department="CS"
            email="jcao068@uottawa.ca" 
          />
          <Profile 
            imageSrc={himagna} 
            name="Himagna Ganti" 
            role="Fullstack Developer"
            Department="ECE"
            email="hgant061@uottawa.ca" 
          />
          <Profile
            imageSrc={abhi}
            name="Abhinay Chimmula"
            role="Fullstack Developer"
            Department="ECE with AI specilization"
            email="achim065@uottawa.ca"
          />
          <Profile
            imageSrc={anuj}
            name="Anuj Nair"
            role="AI Engineer"
            Department="ECE with AI specilization"
            email="anair068@uottawa.ca"
          />
          <Profile
            imageSrc={vishwa}
            name="Sai Yedavalli"
            role="AI Engineer"
            Department="ECE with AI specilization"
            email="syeda058@uottawa.ca"
          />
          <Profile
            imageSrc={shyam}
            name="Shyam Sunder"
            role="AI Engineer"
            Department="ECE with AI specilization"
            email="smudu067@uottawa.ca"
          />
          {/* Add more profile cards as needed */}
        </div>
        </div>
      </div>
    </div>
    
  );
}

export default About;
