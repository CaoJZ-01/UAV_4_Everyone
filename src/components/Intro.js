import React from "react";
import './Intro.css';

function Intro() {
  return (
    <div className="intro">
      <span className="text-7xl">U</span>nmanned Aerial Vehicles (UAVs) have
      become crucial for surveillance and infrastructure inspection, but their
      effective use relies heavily on data-intensive machine learning models for
      tasks such as object detection and collision avoidance. However, the high
      cost of acquiring and labeling data, coupled with limited data
      availability, hinders progress in this field. To address this challenge, a
      collaborative portal is proposed, aiming to facilitate the sharing of UAV
      datasets and project code among researchers and the industry. This
      approach, inspired by successful models in medical and computer vision
      domains, seeks to accelerate advancements in UAV-related applications.
      Canadian departments and agencies have recognized the importance of
      counter-drone research to prevent unauthorized drone activity, while
      infrastructure inspection using UAVs is vital for security. By fostering
      innovation and cooperation, this collaborative portal intends to propel
      the growth of UAV-related technologies and their applications.
    </div>
  );
}

export default Intro;
