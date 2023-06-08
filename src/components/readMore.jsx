import React, { useState, useEffect } from "react";

export const ReadMore = (props) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [readMoreRequired, setReadMoreRequired] = useState(false);

  let idea = props.idea;
  let cutIdea = idea.slice(0, 50);

  useEffect(() => {
    setReadMoreRequired(idea.length >= 50);
    if (readMoreRequired) {
      setShowFullContent(false);
    } else if (idea.length <= 50) {
      setShowFullContent(true);
    }
  }, []);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  if (readMoreRequired) {
    return (
      <div>
        <div className="content">
          {showFullContent ? (
            <div>
              {idea}
              <span className="read-more-link" onClick={toggleContent}>
                {" "}
                🡸 Less
              </span>
            </div>
          ) : (
            <div>
              {`${cutIdea}...`}
              <span className="read-more-link" onClick={toggleContent}>
                {" "}
                More 🡺
              </span>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="content">
          {idea}          
        </div>
      </div>
    );
  }

  
};
