import React from "react";
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
        <span className="SecondItem-headline">{props.headline}</span>
        <span className="SecondItem-authorName">By {props.authorName}</span>
      </div>
    </div>
  );
}
