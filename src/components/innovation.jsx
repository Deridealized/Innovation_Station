import React, { useState } from "react";

export const Innovation = (props) => {
  const [score, setScore] = useState(props.score || 0);
  const { id, anonymous, idea, author, title, email, onVote } = props;
  const timestamp = new Date(props.timestamp);
  const formattedTime = timestamp.toLocaleTimeString();
  const formattedDate = timestamp.toLocaleDateString();

  const handleScoreChange = (vote) => {
    const storedInnovation = JSON.parse(localStorage.getItem(id));
    if (storedInnovation) {
      storedInnovation.score += vote;
      localStorage.setItem(id, JSON.stringify(storedInnovation));
      setScore(storedInnovation.score);
      onVote();
    }
  };

  if (anonymous) {
    return (
      <div className="">
        <div className="ideaForm">
          <h4 className="AuthorBox">{"Anonymous"}</h4>
          <p className="IdeaBox">{idea}</p>
          <h6 className="EmailBox">
            Uploaded on {formattedDate} at {formattedTime}
          </h6>
          <button
            className="upvote-btn"
            type="button"
            onClick={() => handleScoreChange(1)}
          >
            {" "}
            🡹{" "}
          </button>
          <button
            className="downvote-btn"
            type="button"
            onClick={() => handleScoreChange(-1)}
          >
            {" "}
            🡻{" "}
          </button>
          <span className="score-text">{score}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        <div className="ideaForm">
          <h4 className="AuthorBox">{author}</h4>
          <h5 className="TitleBox">{title}</h5>
          <h6 className="EmailBox">{email}</h6>

          <p className="IdeaBox">{idea}</p>
          <h6 className="EmailBox">
            Uploaded on {formattedDate} at {formattedTime}
          </h6>
          <button
            className="upvote-btn"
            type="button"
            onClick={() => handleScoreChange(1)}
          >
            {" "}
            🡹{" "}
          </button>
          <button
            className="downvote-btn"
            type="button"
            onClick={() => handleScoreChange(-1)}
          >
            {" "}
            🡻{" "}
          </button>
          <span className="score-text">{score}</span>
        </div>
      </div>
    );
  }
};
