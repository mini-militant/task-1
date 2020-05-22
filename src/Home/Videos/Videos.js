import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../Title/Title";
import FirstItem from "../molecules/molecule1/FirstItem";
import SecondItem from "../molecules/molecule2/SecondItem";
import ThirdItem from "../molecules/molecule3/ThirdItem";
import FourthItem from "../molecules/molecule4/FourthItem";
import FifthItem from "../molecules/molecule5/FifthItem";
import SixthItem from "../molecules/molecule6/SixthItem";
import SeventhItem from "../molecules/molecule7/SeventhItem";
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

  const SecondBoxElement = storiesData.slice(1, 2).map((item) => (
    <div key={item.id}>
      <SecondItem
        imgKey={item.story["hero-image-s3-key"]}
        headline={item.story.headline}
        authorName={item.story["author-name"]}
      />
    </div>
  ));
  const ThirdBoxElement = storiesData.slice(2, 3).map((item) => (
    <div key={item.id}>
      <ThirdItem
        imgKey={item.story["hero-image-s3-key"]}
        headline={item.story.headline}
        authorName={item.story["author-name"]}
      />
    </div>
  ));
  const FourthBoxElement = storiesData.slice(3, 4).map((item) => (
    <div key={item.id}>
      <FourthItem
        imgKey={item.story["hero-image-s3-key"]}
        headline={item.story.headline}
        authorName={item.story["author-name"]}
      />
    </div>
  ));
  const FifthBoxElement = storiesData.slice(4, 5).map((item) => (
    <div key={item.id}>
      <FifthItem
        imgKey={item.story["hero-image-s3-key"]}
        headline={item.story.headline}
        authorName={item.story["author-name"]}
      />
    </div>
  ));

  const SixthBoxElement = storiesData.slice(5, 6).map((item) => (
    <div key={item.id}>
      <SixthItem
        imgKey={item.story["hero-image-s3-key"]}
        headline={item.story.headline}
        authorName={item.story["author-name"]}
      />
    </div>
  ));
  const SeventhBoxElement = storiesData.slice(6, 7).map((item) => (
    <div key={item.id}>
      <SeventhItem
        imgKey={item.story["hero-image-s3-key"]}
        headline={item.story.headline}
        authorName={item.story["author-name"]}
      />
    </div>
  ));

  return (
    <div>
      {shouldShowTitle ? <Title name={props.name} /> : null}

      <div className="videos-container">
        <div className="top-container">
          <div className="grid-item item1">{firstBoxElement}</div>
          <div className="grid-item item2">
            {SecondBoxElement}
            {ThirdBoxElement}
            {FourthBoxElement}
          </div>
        </div>
        <div className="bottom-container">
          {FifthBoxElement}
          {SixthBoxElement}
          {SeventhBoxElement}
        </div>
      </div>
    </div>
  );
}
