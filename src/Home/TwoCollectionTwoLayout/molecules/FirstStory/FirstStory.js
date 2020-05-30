import React, { useState, useEffect } from "react";

export default function FirstStory(props) {
  return (
    <div className="FirstStory-container">
      <img src={`https://images.assettype.com/${props.imgKey}`} alt="error" />
      <p>{props.headline}</p>
    </div>
  );
}
