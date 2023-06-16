import "./Hero.css"
import React from "react";

export const Hero = (props) => {
  return (
    <div>
      <header className="masthead" role="img" aria-label="Image Description">
        <h1 className="Hero-header">Innovation <br></br>Station</h1>
        <button className="Hero-button" onClick={props.setShowApp}>Enter Innovation Portal</button>
      </header>
    </div>
  );
};
