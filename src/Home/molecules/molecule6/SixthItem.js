import React from "react";
import Layout from "../../../molecule/Layout";
import "./SixthItem.css";

export default function SixthItem(props) {
  return (
    <div className="SixthItem-container">
      <img src={`https://images.assettype.com/${props.imgKey}`} alt="error" />
      <div className="SixthItem-content">
        <span>{props.headline}</span>
        <span>
          By <strong>{props.authorName}</strong>
        </span>
      </div>
    </div>
  );
}
