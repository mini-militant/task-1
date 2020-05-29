import React from "react";
import Headline from "../../../../atom/Headline/Headline";
import AuthorName from "../../../../atom/AuthorName/AuthorName";
import "./CovidSecondItem.css";

export default function CovidSecondItem(props) {
  return (
    <div className="CovidSecondItem-container">
      <img
        className="CovidSecondItem-image"
        src={`https://images.assettype.com/${props.imgKey}`}
        alt="error"
      />
      <div className="CovidSecondItem-content">
        <Headline headline={props.headline} />
        <AuthorName authorName={props.authorName} />
      </div>
    </div>
  );
}
