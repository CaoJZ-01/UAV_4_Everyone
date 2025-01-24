import React, { useState } from "react";
import Table from "./components/Table";
import Modal from "./components/Modal";

function Sampledata() {
  const initialData = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    // Add more data objects as needed
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedData(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Table Example</h1>
      <Table data={initialData} onNameClick={openModal} />
      <Modal isOpen={isModalOpen} data={selectedData} onClose={closeModal} />
    </div>
  );
}

export default Sampledata;
