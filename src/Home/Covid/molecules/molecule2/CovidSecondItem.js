import React from "react";
import "./CovidSecondItem.css";

export default function CovidSecondItem(props) {
  return (
    <div>
      <div className="CovidSecondItem-container">
        <img
          className="CovidSecondItem-image"
          src={`https://images.assettype.com/${props.imgKey}`}
          alt="error"
        />
        <div className="CovidSecondItem-content">
          <span className="CovidSecondItem-headline">{props.headline}</span>
          <span className="CovidSecondItem-authorName">
            By {props.authorName}
          </span>
        </div>
      </div>
    </div>
  );
}
