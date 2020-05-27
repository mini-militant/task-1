import React, { useState, useEffect } from "react";
import "./WebQoofContent.css";

export default function WebQoofContent(props) {
  return (
    <div>
      <div className="WebQoofContent-container">
        <img
          className="WebQoofContent-image"
          src={`https://images.assettype.com/${props.imgKey}`}
          alt="error"
        />
        <p className="WebQoofContent-headline">{props.headline}</p>
        <p className="WebQoofContent-authorName">By {props.authorName}</p>
      </div>
    </div>
  );
}
