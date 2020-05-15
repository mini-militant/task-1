import React, { useState } from 'react';
import './Image.css'

export default function Image(props) {
  return (
    <img
     src={`https://images.assettype.com/${props.imgKey}`}
     alt='error'
     />
  );
}
