import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ThreeStoriesLayout(props) {
  return (
    <div className="ThreeStoriesLayout-container">
      <p>{props.name}</p>
      <p>hi from 3 stories</p>
    </div>
  );
}
