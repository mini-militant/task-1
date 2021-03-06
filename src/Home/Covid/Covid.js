import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import axios from "axios";
import "./Covid.css";
import CovidFirstItem from "./molecules/molecule1/CovidFirstItem";
import CovidSecondItem from "./molecules/molecule2/CovidSecondItem";

export default function Covid(props) {
  const [storiesData, setStoriesData] = useState([]);
  const [shouldShowTitle, setShouldShowTitle] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(props.url);
      let stories = result.data.items.filter((item) => item.type === "story");
      setStoriesData(stories);
      setShouldShowTitle(stories.length > 0);
    }
    fetchData();
  }, []);

  const FirstBoxElement = storiesData.slice(0, 1).map((item) => (
    <div key={item.id}>
      <CovidFirstItem
        imgKey={item.story["hero-image-s3-key"]}
        headline={item.story.headline}
        authorName={item.story["author-name"]}
      />
    </div>
  ));

  return (
    <div className="covid-root">
      <div className="covid-container">
        <div className="covid-title">{props.name} </div>
        <div className="covid-item1">{FirstBoxElement}</div>
        <div className="covid-item2">
          {storiesData.slice(1, 8).map((item) => (
            <div key={item.id}>
              <CovidSecondItem
                imgKey={item.story["hero-image-s3-key"]}
                headline={item.story.headline}
                authorName={item.story["author-name"]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
