import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Import the Home component
import About from "./components/About";
import Datasets from "./components/Datasets"; // Import the Datasets component
import Knowmore from "./components/Knowmore";
import Tableredner from "./components/Tablerender";
import Modelandmetrics from "./components/Modelandmetrics";
import Joinus from "./components/Joinus";
import Samdescription from "./components/Samdescription";
import Yolov8descriptions from "./components/Yolov8description";
function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the Home component */}
        <Route path="/About" element={<About />} /> {/* Route for the About component */}
        <Route path="/Datasets" element={<Datasets />} /> {/* Route for the Datasets component */}
        <Route path="/Knowmore" element={<Knowmore/>} /> {/* Route for the Know more component*/}
        <Route path="/Tablerender" element={<Tableredner/>} />
        <Route path="/Modelandmetrics" element={<Modelandmetrics/>} />
        <Route path="/Joinus" element={<Joinus/>} />
        <Route path="/Samdescription" element={<Samdescription/>} />
        <Route path="/Yolov8descriptions" element={<Yolov8descriptions/>}/>
        </Routes>
    </Router>
  );
}

export default App;
