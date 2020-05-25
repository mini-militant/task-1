import React from "react";
import "./FifthItem.css";

export default function FifthItem(props) {
  return (
    <div className="FifthItem-container">
      <img src={`https://images.assettype.com/${props.imgKey}`} alt="error" />
      <div className="FifthItem-content">
        <span className="FifthItem-headline">{props.headline}</span>
        <span className="FifthItem-authorName">By {props.authorName}</span>
      </div>
    </div>
  );
}
