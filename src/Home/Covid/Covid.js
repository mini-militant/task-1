import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import axios from "axios";
import "./Covid.css";

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

  return (
    <div className="covid-root">
      <Title name={props.name} />
      <div className="covid-container">
        <div className="covid-item1">1</div>
        <div className="covid-item2">
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </div>
    </div>
  );
}
