import React from "react";
import "./FirstItem.css";

export default function FirstItem(props) {
  return (
    <div className="FirstItem-container">
      <img
        className="firstItem-image"
        src={`https://images.assettype.com/${props.imgKey}`}
        alt="error"
      />
      <div className="firstItem-content">
        <p className="firstItem-headline">{props.headline}</p>

        <p className="firstItem-authorName"> By {props.authorName}</p>
      </div>
    </div>
  );
}
