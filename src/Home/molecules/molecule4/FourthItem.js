import React from "react";
import "./FourthItem.css";

export default function FourthItem(props) {
  return (
    <div className="FourthItem-container">
      <img
        className="FourthItem-image"
        src={`https://images.assettype.com/${props.imgKey}`}
        alt="error"
      />
      <div className="FourthItem-content">
        <span className="FourthItem-headline">{props.headline}</span>
        <span>
          By <strong>{props.authorName}</strong>
        </span>
      </div>
    </div>
  );
}
