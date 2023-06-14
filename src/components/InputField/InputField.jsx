import React, { useState } from "react";

export const InputField = (props) => {
  const isIdeaField = props.isIdeaField;

  // const [text, setText] = useState('')

  const maxChars = props.setMaxInput;

  const setClasses = () => {
    if (props.isAnonymous) {
      return "InputField GreyedOut";
    } else if (!props.isAnonymous) {
      return "InputField";
    }
  };

  const maxError = (e) => {
    return props.setMaxCallback(e.length === maxChars);
  };

  const invalidInput = () => {
    if (props.isValid || props.isValid === null) {
      return { borderColor: "#2699FB" };
      
    } else if (!props.isValid) {
      return { borderColor: "#c02323" };
    }
  };

  if (!isIdeaField) {
    return (
      <input
        className={setClasses()}
        placeholder={props.name}
        name={props.name}
        maxLength="50"
        value={props.text}
        onChange={(e) => {
          props.updateText(e);
          maxError(e.target.value);
        }}
        style={invalidInput()}
      ></input>
    );
  } else {
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
  }
};
