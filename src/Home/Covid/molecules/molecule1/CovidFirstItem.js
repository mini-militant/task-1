import React from "react";
import "./CovidFirstItem.css";

export default function CovidFirstItem(props) {
  return (
    <div>
      <div className="CovidFirstItem-container">
        <img
          className="CovidFirstItem-image"
          src={`https://images.assettype.com/${props.imgKey}`}
          alt="error"
        />
        <div className="CovidFirstItem-content">
          <span className="CovidFirstItem-headline">{props.headline}</span>

          <span className="CovidFirstItem-authorName">
            By {props.authorName}
          </span>
        </div>
      </div>
    </div>
  );
}
