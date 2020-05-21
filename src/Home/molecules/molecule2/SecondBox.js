import React from "react";
import "./SecondBox.css";

export default function SecondBox(props) {
  return (
    <div className="SecondBox-container">
      <img
        className="SecondBox-image"
        src={`https://images.assettype.com/${props.imgKey}`}
        alt="error"
      />
      <div className="SecondBox-content">
        <span>
          <strong>{props.headline}</strong>
        </span>
        <span>
          By <strong>{props.authorName}</strong>
        </span>
      </div>
    </div>
  );
}
