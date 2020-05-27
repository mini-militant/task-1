import React, { useState, useEffect } from "react";
import Image from "../../../atom/Image/Image";
import "./WebQoofContent.css";

export default function WebQoofContent(props) {
  return (
    <div>
      <div className="WebQoofContent-container">
        <Image imgKey={props.imgKey} />
        <p className="WebQoofContent-headline">{props.headline}</p>
        <p className="WebQoofContent-authorName">By {props.authorName}</p>
      </div>
    </div>
  );
}
