import React from "react";
import "./SeventhItem.css";

export default function SeventhItem(props) {
  return (
    <div className="SeventhItem-container">
      <img src={`https://images.assettype.com/${props.imgKey}`} alt="error" />
      <div className="SeventhItem-content">
        <span>{props.headline}</span>
        <span>
          By <strong>{props.authorName}</strong>
        </span>
      </div>
    </div>
  );
}
