import React, { useState, useEffect } from "react";
import axios from "axios";
import FirstItem from "../molecules/molecule1/FirstItem";
import SecondBox from "../molecules/molecule2/SecondBox";
import ThirdBox from "../molecules/molecule3/ThirdBox";
import "./Videos.css";

export default function Videos(props) {
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

  const firstBoxElement = storiesData.slice(0, 1).map((item) => (
    <div key={item.id}>
      <FirstItem
        imgKey={item.story["hero-image-s3-key"]}
        headline={item.story.headline}
        authorName={item.story["author-name"]}
      />
    </div>
  ));

  const SecondBoxElement = storiesData.slice(1, 4).map((item) => (
    <div key={item.id}>
      <SecondBox
        imgKey={item.story["hero-image-s3-key"]}
        headline={item.story.headline}
        authorName={item.story["author-name"]}
      />
    </div>
  ));
  const ThirdBoxElement = storiesData.slice(4, 5).map((item) => (
    <div key={item.id}>
      <ThirdBox
        imgKey={item.story["hero-image-s3-key"]}
        headline={item.story.headline}
        authorName={item.story["author-name"]}
      />
    </div>
  ));
  const FourthBoxElement = storiesData.slice(5, 6).map((item) => (
    <div key={item.id}>
      <ThirdBox
        imgKey={item.story["hero-image-s3-key"]}
        headline={item.story.headline}
        authorName={item.story["author-name"]}
      />
    </div>
  ));
  const FifthBoxElement = storiesData.slice(6, 7).map((item) => (
    <div key={item.id}>
      <ThirdBox
        imgKey={item.story["hero-image-s3-key"]}
        headline={item.story.headline}
        authorName={item.story["author-name"]}
      />
    </div>
  ));

  return (
    <div>
      {shouldShowTitle ? <p> {props.name} </p> : null}

      <div className="videos-container">
        <div className="grid-item item1">{firstBoxElement}</div>
        <div className="grid-item item2">{SecondBoxElement}</div>
        <div className="grid-item item3">{ThirdBoxElement}</div>
        <div className="grid-item item4">{FourthBoxElement}</div>
        <div className="grid-item item5">{FifthBoxElement}</div>
      </div>
    </div>
  );
}
