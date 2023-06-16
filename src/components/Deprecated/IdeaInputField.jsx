import React from "react";

export const IdeaInputField = (props) => {
  const maxChars = props.setMaxInput;

  const maxError = (e) => {
    return props.setMaxCallback(e.length === maxChars);
  };

  const invalidInput = () => {
    if (!props.isValid) {
      return { borderColor: "#c02323" };
    } else if (props.isValid) {
      return { borderColor: "#2699FB" };
    }
  };

  return (
    <textarea
      className="IdeaInputField"
      rows="4"
      cols="50"
      placeholder={props.name}
      name={props.name}
      maxLength="2500"
      value={props.text}
      onChange={(e) => {
        props.updateText(e);
        maxError(e.target.value);
      }}
      style={invalidInput()}
    ></textarea>
  );
};
