import React, { useState, useEffect } from "react";

function InnovationList(props) {
  const [submissions, setSubmissions] = useState([]);

  const show = () => {
    if (submissions) {
      return "link-btn";
    } else {
      return "hide";
    }
  };

  return (
    <div>
      <form className="MainForm2">
        <header>
          <h1 className="MainTitle">Recent innovations</h1>
        </header>

        <div className="InputRow">Template Text</div>

        <button className={show()} type="button">
          Close
        </button>
      </form>
    </div>
  );
}

export default InnovationList;
