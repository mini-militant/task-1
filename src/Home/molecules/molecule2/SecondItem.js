import React from "react";
import Headline from "../../../atom/Headline/Headline";
import "./SecondItem.css";

export default function SecondItem(props) {
  return (
    <div className="SecondBox-container">
      <img
        className="SecondBox-image"
        src={`https://images.assettype.com/${props.imgKey}`}
        alt="error"
      />
      <div className="SecondBox-content">
        <span>{props.headline}</span>
        <span>
          By <strong>{props.authorName}</strong>
        </span>
      </div>
    </div>
  );
}