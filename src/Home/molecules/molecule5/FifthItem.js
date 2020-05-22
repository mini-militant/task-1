import React from "react";
import Layout from "../../../molecule/Layout";
import "./FifthItem.css";

export default function FifthItem(props) {
  return (
    <div className="FifthItem-container">
      <img src={`https://images.assettype.com/${props.imgKey}`} alt="error" />
      <div className="FifthItem-content">
        <span>{props.headline}</span>
        <span>
          By <strong>{props.authorName}</strong>
        </span>
      </div>
    </div>
  );
}
