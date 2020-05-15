import React, { useState } from 'react';
import './AuthorName.css'
export default function AuthorName(props) {
  return (
    <p className="authorName">By {props.authorName}</p>
  );
}
