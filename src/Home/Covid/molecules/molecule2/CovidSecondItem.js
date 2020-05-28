import React from "react";
import Headline from "../../../../atom/Headline/Headline";
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
          <Headline headline={props.headline} />
          <span className="CovidSecondItem-authorName">
            By {props.authorName}
          </span>
        </div>
      </div>
    </div>
  );
}
