import React from "react";
import "./Table.css"; // Import the CSS file

function Table({ data, onNameClick }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Dataset Name</th>
          {/* <th>Number of Images</th> */}
          <th>Date of Upload</th>
          {/* Add more table headers as needed */}
          <th>sesonality of data</th>
          <th>Domain</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td onClick={() => onNameClick(item)} className="name-cell">
              {item.Datasetname}
            </td>
            {/* <td>{item.Numberofimages}</td> */}
            <td>{item.Dateofupload}</td>
            <td>{item.seasonality}</td>
            <td>{item.domain}</td>
            {/* Render other data columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
