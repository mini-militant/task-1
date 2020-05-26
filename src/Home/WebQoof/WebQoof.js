import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../Title/Title";
import Layout from "../../molecule/Layout";
import "./WebQoof.css";

export default function WebQoof(props) {
  const [storiesData, setStoriesData] = useState([]);
  const [shouldShowTitle, setShouldShowTitle] = useState(false);
  const [buttonValue, setbuttonValue] = useState("+");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(props.url);
      let stories = result.data.items.filter((item) => item.type === "story");
      setStoriesData(stories);
      setShouldShowTitle(stories.length > 0);
    }
    fetchData();
  }, []);

  function handleClick(e) {
    e.preventDefault();
    setbuttonValue(buttonValue === "+" ? "-" : "+");
    setOpen(open === false ? true : false);
  }

  return (
    <div>
      <div className="WebQoof-TitleButton">
        <Title name={props.name} />
        <button className="WebQoof-button" onClick={handleClick}>
          {buttonValue}
        </button>
      </div>
      {open ? (
        <div className="WebQoof-container">
          {storiesData.slice(0, 3).map((item) => (
            <div key={item.id}>
              <Layout
                imgKey={item.story["hero-image-s3-key"]}
                headline={item.story.headline}
                authorName={item.story["author-name"]}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
