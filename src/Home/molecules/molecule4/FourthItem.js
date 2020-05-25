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
        <span className="FourthItem-authorName">By {props.authorName}</span>
      </div>
    </div>
  );
}
