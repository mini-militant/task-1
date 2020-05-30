import React, { useState, useEffect } from "react";
import "./SecondStory.css";
export default function SecondtStory(props) {
  return (
    <div className="SecondStory-container">
      <p className="SecondStory-headline">{props.headline}</p>
    </div>
  );
}
