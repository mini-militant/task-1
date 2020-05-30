import React, { useEffect, useState } from "react";
import axios from "axios";
import ThreeStoriesLayout from "./ThreeStoriesLayout/ThreeStoriesLayout";
import "./TwoItemLayout.css";
export default function TwoItemLayout(props) {
  const [subHeadingData, setSubHeadingData] = useState([]);
  const [shouldShowTitle, setShouldShowTitle] = useState(false);
  const baseUrl =
    "https://thequint-malibu-beta.quintype.io/api/v1/collections/";

  useEffect(() => {
    async function fetchData() {
      const result = await axios(props.url + "?limit=2");
      let stories = result.data.items;
      setSubHeadingData(stories);
      setShouldShowTitle(stories.length > 0);
    }
    fetchData();
  }, []);

  return (
    <div className="subheading-container">
      {subHeadingData.map((item, index) => (
        <div key={item.id}>
          <ThreeStoriesLayout url={baseUrl + item.slug} name={item.name} />
        </div>
      ))}
    </div>
  );
}
