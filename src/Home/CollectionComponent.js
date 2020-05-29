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
  const [layout, setLayout] = useState([]);
  const baseUrl =
    "https://thequint-malibu-beta.quintype.io/api/v1/collections/";

  useEffect(() => {
    async function fetchData() {
      const result = await axios(baseUrl + "home");
      setData(result.data.items.filter((item) => item.type === "collection"));
      setLayout(
        result.data.items.filter(
          (item) =>
            item["associated-metadata"].layout === "TwoCollectionWithTwoStories"
        )
      );
    }
    fetchData();
  }, []);

  return (
    <div className="collection-container">
      {layout.map((item, index) => (
        <div key={item.id}>
          <p>
            <strong>{item.name}</strong>
          </p>
          <TwoItemLayout url={baseUrl + item.slug} name={item.name} />
        </div>
      ))}

      {data.map((filteredData, index) => {
        return (
          <div key={filteredData.id}>
            {index === 1 ? (
              <Videos
                url={baseUrl + filteredData.slug}
                name={filteredData.name}
              />
            ) : index === 4 ? (
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
