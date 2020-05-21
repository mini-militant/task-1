import React from "react";
import Layout from "../../../molecule/Layout";
import "./ThirdBox.css";

export default function ThirdBox(props) {
  return (
    <div>
      <Layout
        imgKey={props.imgKey}
        headline={props.headline}
        authorName={props.authorName}
      />
    </div>
  );
}
