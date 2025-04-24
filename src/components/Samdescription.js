import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Title from "./Title";
import "./Modeldescription.css";


function Samdescription() {
    return (
      <div className="home-container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="title">
          <Title text="SAM Model" />
        </div>
        <div className="modeldescription-container">
          <h1 className="modeldescription-title">SAM Model: How we use it in the DrIFT project ?</h1>
          <br/>
          <p className="modeldescription-paragraph">
          <strong>Automated Background Segmentation & Flexibility</strong>
          <br/>
          We leverage the Segment Anything Model (SAM) to automatically generate sky, tree, and ground masks for every validation frame in DrIFT. By simply providing a handful of point or box prompts, SAM produces high-quality segmentation maps across diverse domains—real vs. synthetic data, multiple seasons, aerial vs. ground views. Its promptable interface lets us tweak or extend background categories (e.g. adding “building” or “road”) by re-prompting on the same images, giving us the flexibility to adapt our segmentation scheme as new domain shifts emerge.
          </p>
          <p className="modeldescription-paragraph">
          <strong>Rapid Iteration & Feedback Loop</strong>
          <br/>
          Integrating SAM into our annotation pipeline delivers near-instantaneous segmentation outputs at scale. Rather than manually drawing masks for each of the 47,991 frames, we batch-run SAM and then inspect aggregated background-wise metrics in minutes. This rapid feedback cycle allows us to immediately evaluate how a new domain (e.g. foggy weather) affects our detector’s performance and refine prompts or post-processing rules on the fly.
          </p>
          <p className="modeldescription-paragraph">
          <strong>Collaborative, Human-in-the-Loop Refinement</strong>
          <br/>
          Although SAM excels at zero- or few-shot segmentation, some edge cases (e.g. heavily occluded drones against dense foliage) still require human oversight. We export SAM’s initial masks into CVAT, where annotators correct any mis-segmentations. Those corrections inform updated prompt sets, which we feed back into SAM—enabling an iterative collaboration that balances automation speed with annotation accuracy.
          </p>
          <p className="modeldescription-paragraph">
          <strong>Repetitive Tasks & Scalability</strong>
          <br/>
          Running SAM over tens of thousands of frames is inherently repetitive, but it scales far better than fully manual annotation. We mitigate the monotony by grouping similar scenes (same domain and season) and re-using prompting strategies, yet the volume of data still demands careful orchestration—automated job scheduling, progressive validation, and spot checks to catch drift in segmentation quality.
          </p>
          <p className="modeldescription-paragraph">
          <strong>Compute & Resource Trade-Offs</strong>
          <br/>
          Generating and refining segmentation masks with SAM can be time-consuming and compute-intensive—especially when re-prompting to handle challenging backgrounds like snowy or foggy scenes. The model’s GPU requirements and the human review loop add overhead. However, this upfront investment in precise background maps is crucial: it underpins our background-wise evaluation metrics and ultimately strengthens the robustness of our domain-adaptation benchmarks.
          </p>
          <br/>
        </div>
        
      </div>
    </div>
    );
  }

  
  export default Samdescription;