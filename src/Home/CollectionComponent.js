import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryComponent from "./CategoryComponent";
import "./collectionComponent.css";
import Videos from "./Videos/Videos";
import WebQoof from "./WebQoof/WebQoof";
import Covid from "./Covid/Covid";
import TwoItemLayout from "./TwoCollectionTwoLayout/TwoItemLayout";

export default function CollectionComponent() {
  const [data, setData] = useState([]);
  const baseUrl =
    "https://thequint-malibu-beta.quintype.io/api/v1/collections/";

  useEffect(() => {
    async function fetchData() {
      const result = await axios(baseUrl + "home");
      setData(result.data.items);
    }
    fetchData();
  }, []);

  return (
    <div className="collection-container">
      {data
        .filter((item) => item.type === "collection")
        .map((filteredData, index) => {
          return (
            <div key={filteredData.id}>
              {filteredData["associated-metadata"].layout ===
              "TwoCollectionWithTwoStories" ? (
                <div className="twoCollectionContainer-root">
                  <p className="twoCollectionContainer-title">
                    {filteredData.name}
                  </p>
                  <TwoItemLayout
                    url={baseUrl + filteredData.slug}
                    name={filteredData.name}
                  />
                </div>
              ) : null}
              {filteredData["associated-metadata"].layout ===
              "VideoScroller" ? (
                <Covid
                  url={baseUrl + filteredData.slug}
                  name={filteredData.name}
                />
              ) : null}

              {index === 1 ? null : index === 4 ? (
                <WebQoof
                  url={baseUrl + filteredData.slug}
                  name={filteredData.name}
                />
              ) : index === 5 ? (
                <Covid
                  url={baseUrl + filteredData.slug}
                  name={filteredData.name}
                />
              ) : (
                <CategoryComponent
                  url={baseUrl + filteredData.slug}
                  name={filteredData.name}
                />
              )}
            </div>
          );
        })}
    </div>
  );
}
