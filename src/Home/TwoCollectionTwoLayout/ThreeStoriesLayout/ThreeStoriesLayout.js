import React, { useState, useEffect } from "react";
import axios from "axios";
import FirstStory from "../molecules/FirstStory/FirstStory";
import SecondStory from "../molecules/SecondStory/SecondStory";
import "./ThreeStoriesLayout.css";

export default function ThreeStoriesLayout(props) {
  const [storiesData, setStoriesData] = useState([]);
  const [shouldShowTitle, setShouldShowTitle] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(props.url + "?limit=3");
      let stories = result.data.items.filter((item) => item.type === "story");
      setStoriesData(stories);
      setShouldShowTitle(stories.length > 0);
    }
    fetchData();
  }, []);

  const FirstBoxElement = storiesData.slice(0, 1).map((item) => (
    <div key={item.id}>
      <FirstStory
        headline={item.story.headline}
        imgKey={item.story["hero-image-s3-key"]}
      />
    </div>
  ));

  const SecondBoxElement = storiesData.slice(1, 3).map((item) => (
    <div key={item.id}>
      <SecondStory headline={item.story.headline} />
    </div>
  ));

  return (
    <div className="ThreeStoriesLayout-container">
      <p className="ThreeStoriesLayout-title">{props.name}</p>
      <div className="ThreeStoriesLayout-item1">{FirstBoxElement}</div>
      <div className="ThreeStoriesLayout-item2">{SecondBoxElement}</div>
    </div>
  );
}
