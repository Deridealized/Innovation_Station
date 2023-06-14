import React, { useState } from "react";

export const InputField = (props) => {

  // const [text, setText] = useState('')

  const maxChars = props.setMaxInput;

  const setClasses = () => {
    if (props.isAnonymous) {
      return "InputField GreyedOut";
    } else if (!props.isAnonymous) {
      return "InputField";
    }
  };

  const maxError = e => {
    return props.setMaxCallback(e.length === maxChars);
  };

  const invalidInput = () => {
    if (props.isValid) {
      return { borderColor: "#c02323" };
    } else if (props.isValid) {
      return { borderColor: "#2699FB" };
    }
  };




  return (
    <input
      className={setClasses()}
      placeholder={props.name}
      name={props.name}
      maxLength="50"
      value={props.text}
      onChange={e => {
        // props.setInputCallback(e.target.value);
        // maxError(e.target.value);
        props.updateText(e)
      }}
      style={invalidInput()}
    ></input>
  );
};