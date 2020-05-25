import React from "react";
import "./ThirdItem.css";

export default function ThirdItem(props) {
  return (
    <div className="ThirdItem-container">
      <img
        className="ThirdItem-image"
        src={`https://images.assettype.com/${props.imgKey}`}
        alt="error"
      />
      <div className="ThirdItem-content">
        <span className="ThirdItem-headline">{props.headline}</span>
        <span className="ThirdItem-authorName">By {props.authorName}</span>
      </div>
    </div>
  );
}
