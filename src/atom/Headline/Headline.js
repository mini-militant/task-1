import React from 'react';
import './Headline.css'

export default function Headline(props) {
  return (
    <p className="headline">{props.headline}</p>
  );
}
