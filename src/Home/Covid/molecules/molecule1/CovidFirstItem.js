import React from "react";
import AuthorName from "../../../../atom/AuthorName/AuthorName";
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
          <AuthorName authorName={props.authorName} />
        </div>
      </div>
    </div>
  );
}
