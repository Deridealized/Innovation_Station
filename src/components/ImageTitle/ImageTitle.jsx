import React from "react";

export const ImageTitle = (props) => {
    const title = props.title;
    const image = props.image;

  return (
    <div className="image-title">
        <img src={image} alt="generic"/>
        <span style={{marginTop: 15}}>{title}</span>
    </div>
  )
}