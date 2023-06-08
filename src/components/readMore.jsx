import React, { useState } from "react";

export const ReadMore = (props) => {
  const [showFullContent, setShowFullContent] = useState(false);

  let idea = props.idea;
  let cutIdea = idea.slice(0, 50);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div>
      <div className="content">
        
        {showFullContent ? (
          <div>
            {idea}
            <span className="read-more-link" onClick={toggleContent}>
              {" "}🡸 Less
            </span>
            </div>
        ) : (
          <div>
            {`${cutIdea}...`}           
            <span className="read-more-link" onClick={toggleContent}>
              {" "}More 🡺
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
