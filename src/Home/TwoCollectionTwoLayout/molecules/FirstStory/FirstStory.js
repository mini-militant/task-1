import React, { useState, useEffect } from "react";
import "./FirstStory.css";
export default function FirstStory(props) {
  return (
    <div className="FirstStory-container">
      <img
        className="FirstStory-image"
        src={`https://images.assettype.com/${props.imgKey}`}
        alt="error"
      />
      <p className="FirstStory-headline">{props.headline}</p>
    </div>
  );
}
