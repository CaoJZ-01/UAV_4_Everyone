import React, { useState } from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Table from "./Table";
import Title from "./Title";
import "./Table.css";
import Modal from "./Modal"; // Import the Modal component
import "./Modal.css";
import "./Tablerenderdrone.css";
import A001 from "./AerialSynthetic/001.png";
import A032 from "./AerialSynthetic/032.png";
import A066 from "./AerialSynthetic/066.png";
import A096 from "./AerialSynthetic/096.png";
import A129 from "./AerialSynthetic/129.png";
import A392 from "./AerialSynthetic/392.png";
import G002 from "./GroundSynthetic/002.png";
import G091 from "./GroundSynthetic/091.png";
import G148 from "./GroundSynthetic/148.png";
import G231 from "./GroundSynthetic/231.png";
import G306 from "./GroundSynthetic/306.png";
import G400 from "./GroundSynthetic/400.png";

function Tablerederdrone() {
  const data = [
    { id: 1, Datasetname: "Aerial Synthetic", Dateofupload: "10/12/2024", seasonality:"Summer, Fall, Winter",domain:"Drones", description: "Link provided below will download datasets from Hugging Face", datasetlink:"https://huggingface.co/datasets/CARG-uOttawa/DrIFT/resolve/main/Aerial_Synthetic.zip?download=true", imagePath: [A001, A032, A066, A096, A129, A392]},
    { id: 2, Datasetname: "Ground Synthetic", Dateofupload: "10/12/2024",seasonality:"Winter",domain:"Drones", description: "Link provided below will download datasets from Hugging Face", datasetlink:"https://huggingface.co/datasets/CARG-uOttawa/DrIFT/resolve/main/Ground_Synthetic.zip?download=true", imagePath: [G002, G091, G148, G231, G306, G400]},
    // Add more dataset objects as needed
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setSelectedData(null);
    setIsModalOpen(false);
  }

  return (
    <div className="home-container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="title">
          <Title text="Drones Datasets" />
        </div>
        <div className="tablerender-container">
          <h1 className="detail-dataset-title">Drones Datasets</h1>
          <Table data={data} onNameClick={openModal} /> {/* Pass the openModal function */}
          <Modal isOpen={isModalOpen} data={selectedData} onClose={closeModal} /> {/* Render the Modal */}
          <div className="knowmore-card">
            <h3 className="small-bold-text">DrIFT :  Autonomous Drone Dataset with Integrated Real and Synthetic Data, Flexible Views, and Transformed Domains</h3>
            <br></br>
            <p>
            The DrIFT dataset addresses the critical need for robust visual drone detection under real‑world domain shifts by offering fourteen systematically varied domains—encompassing changes in viewpoint, synthetic vs. real imagery, seasonal variation, and adverse weather—and uniquely supplying pixel‑wise background segmentation maps for background‑aware evaluation. To complement this rich dataset, we introduce MCDO‑map, an efficient Monte Carlo Dropout–based uncertainty metric, and leverage it within an uncertainty‑aware unsupervised domain adaptation framework that selectively adapts high‑confidence regions. Together, these contributions enable more reliable drone detection across diverse environments, closing the gap between controlled training conditions and the complexities of real‑world deployment.
            </p>
            <br></br>
            <p>
            author: Fardad Dadboud and Hamid Azad and Varun Mehta and Miodrag Bolic and Iraj Mantegh
            </p>
            <p>
            year: 2024
            </p>
            <p>
            eprint: 2412.04789
            </p>
            <p>
            archivePrefix: arXiv
            </p>
            <p>
            primaryClass: cs.CV
            </p>
            <p>
            url: https://arxiv.org/abs/2412.04789
            </p>
            <br></br>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Tablerederdrone;
