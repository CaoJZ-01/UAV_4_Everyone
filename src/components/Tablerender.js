import React, { useState } from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Table from "./Table";
import Title from "./Title";
import "./Table.css";
import Modal from "./Modal"; // Import the Modal component
import "./Modal.css";
import "./Tablerender.css";
import I51 from "./Normalinsulators/0051.jpg";
import I49 from "./Normalinsulators/0049.jpg";
import I56 from "./Normalinsulators/0056.jpg";
import I58 from "./Normalinsulators/0058.jpg";
import I59 from "./Normalinsulators/0059.jpg";
import I60 from "./Normalinsulators/0060.jpg";
import D07 from "./Defectiveinsulators/170007d.JPG";
import D13 from "./Defectiveinsulators/170013v.JPG";
import D29 from "./Defectiveinsulators/170029d.JPG";
import D30 from "./Defectiveinsulators/170030.JPG";
import D31 from "./Defectiveinsulators/170031v.JPG";
import D32 from "./Defectiveinsulators/170032h.JPG";

function Tablereder() {
  const data = [
    { id: 1, Datasetname: "Normal Insulators", Dateofupload: "31/10/2023", seasonality:"Summer",domain:"Insulators", description: "Link provided below will download datasets from our Amazon s3 bucket", datasetlink:"https://object-arbutus.cloud.computecanada.ca/rrg-test-bucket/Normal_insulators_images.zip", imagePath: [I49, I51, I56]},
    { id: 2, Datasetname: "Defective Insulators", Dateofupload: "31/10/2023",seasonality:"Summer",domain:"Insulators", description: "Link provided below will download datasets from our Amazon s3 bucket", datasetlink:"https://object-arbutus.cloud.computecanada.ca/rrg-test-bucket/defect_images.zip", imagePath: [D07, D13, D29]},
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
          <Title text="Powerlines Datasets" />
        </div>
        <div className="tablerender-container">
          <h1 className="detail-dataset-title">Powerlines Datasets</h1>
          <Table data={data} onNameClick={openModal} /> {/* Pass the openModal function */}
          <Modal isOpen={isModalOpen} data={selectedData} onClose={closeModal} /> {/* Render the Modal */}
          <div className="knowmore-card">
            <h3 className="small-bold-text">Normal Insulators</h3>
            <h2>Functionality:</h2>
            <p>
              Normal insulators play a crucial role in power transmission systems by preventing the flow of electrical current between the power line and the supporting structures (such as poles or towers).
            </p>
            <h2>Material:</h2>
            <p>
              They are typically made of materials like porcelain, glass, or polymers with excellent insulating properties.
            </p>
            <h2>Appearance:</h2>
            <p>
              Normal insulators often have a consistent, unblemished appearance. They are designed to withstand environmental factors such as weather, temperature changes, and pollution.
            </p>
            <h2>Maintenance:</h2>
            <p>
            Regular inspection and maintenance ensure that normal insulators continue to function effectively. They are expected to remain free from visible damage or defects during routine checks.
            </p>
            <br></br>
            <h3 className="small-bold-text">Defective Insulators</h3>
            <h2>Types of Defects:</h2>
            <p>
            Defective insulators can exhibit various issues, including physical damage, contamination, cracks, or electrical breakdown.
            </p>
            <h2>Causes of Defects:</h2>
            <p>
            Defects can result from factors such as environmental stress, mechanical damage, manufacturing flaws, or prolonged exposure to harsh conditions.
            </p>
            <h2>Visual Indicators:</h2>
            <p>
            Visual inspection may reveal signs of discoloration, chipping, or irregularities on the surface of defective insulators. Cracks or breaks may also be present.
            </p>
            <h2>Impact on Performance:</h2>
            <p>
            Defective insulators compromise the integrity of the power transmission system, potentially leading to electrical failures, outages, or safety hazards.
            </p>
            <h2>Monitoring and Replacement:</h2>
            <p>
            Continuous monitoring and timely replacement of defective insulators are crucial to maintaining the reliability and safety of powerlines.
            </p>
            <br></br>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="Navbar">
    //     <Navbar />
    //   </div>
    //   <div className="home-container">
    //     <div className="title">
    //       <Title text="Powerlines Datasets" />
    //     </div>
    //     <div className="tablerender-container">
    //       <h1 className="big-bold-text">Powerlines Datasets</h1>
    //       <Table data={data} onNameClick={openModal} /> {/* Pass the openModal function */}
    //       <Modal isOpen={isModalOpen} data={selectedData} onClose={closeModal} /> {/* Render the Modal */}
    //       <div className="knowmore-card">
    //         <h3 className="small-bold-text">Normal Insulators</h3>
    //         <h2>Functionality:</h2>
    //         <p>
    //           Normal insulators play a crucial role in power transmission systems by preventing the flow of electrical current between the power line and the supporting structures (such as poles or towers).
    //         </p>
    //         <h2>Material:</h2>
    //         <p>
    //           They are typically made of materials like porcelain, glass, or polymers with excellent insulating properties.
    //         </p>
    //         <h2>Appearance:</h2>
    //         <p>
    //           Normal insulators often have a consistent, unblemished appearance. They are designed to withstand environmental factors such as weather, temperature changes, and pollution.
    //         </p>
    //         <h2>Maintenance:</h2>
    //         <p>
    //         Regular inspection and maintenance ensure that normal insulators continue to function effectively. They are expected to remain free from visible damage or defects during routine checks.
    //         </p>
    //         <h3 className="small-bold-text">Defective Insulators</h3>
    //         <h2>Types of Defects:</h2>
    //         <p>
    //         Defective insulators can exhibit various issues, including physical damage, contamination, cracks, or electrical breakdown.
    //         </p>
    //         <h2>Causes of Defects:</h2>
    //         <p>
    //         Defects can result from factors such as environmental stress, mechanical damage, manufacturing flaws, or prolonged exposure to harsh conditions.
    //         </p>
    //         <h2>Visual Indicators:</h2>
    //         <p>
    //         Visual inspection may reveal signs of discoloration, chipping, or irregularities on the surface of defective insulators. Cracks or breaks may also be present.
    //         </p>
    //         <h2>Impact on Performance:</h2>
    //         <p>
    //         Defective insulators compromise the integrity of the power transmission system, potentially leading to electrical failures, outages, or safety hazards.
    //         </p>
    //         <h2>Monitoring and Replacement:</h2>
    //         <p>
    //         Continuous monitoring and timely replacement of defective insulators are crucial to maintaining the reliability and safety of powerlines.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Tablereder;
