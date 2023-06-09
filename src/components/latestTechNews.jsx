import React from "react";
import image1 from "../images/tech1.jpg";
import image2 from "../images/tech2.jpg";
import image3 from "../images/tech3.jpg";
import image4 from "../images/tech4.jpg";

export const LatestTechNews = (props) => {
  return (
    <div className="sidebar">
      <div className="MainForm2">
        <div>
          <header>
            <h4 style={{ opacity: 0.5 }}>Latest Tech News</h4>
          </header>
          <a href="www.google.com">
          <img className="tech-img" src={image1} alt="techImg" href={"www.google.com"}/>
          <h5 className="tech-img">13 REASONS Google's AI will KILL us ALL, number 7 will SHOCK you!!</h5>
          <img className="tech-img" src={image2} alt="techImg" />
          <h5 className="tech-img">ALLSTAR cards USED to FUEL latest SPACEX mission</h5>
          <img className="tech-img" src={image3} alt="techImg" />
          <h5 className="tech-img">WORLD HUNGER on the EDGE of being SOLVED with 3d printed BANANAS</h5>
          <img className="tech-img" src={image4} alt="techImg" />
          <h5 className="tech-img">PROFITS soar due to REVOLUTIONARY apprentice scheme's INNOVATION STATION</h5>
          </a>
        </div>
      </div>
    </div>
  );
};
