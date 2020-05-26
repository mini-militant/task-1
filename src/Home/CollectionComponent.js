import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryComponent from "./CategoryComponent";
import "./collectionComponent.css";
import Videos from "./Videos/Videos";
import WebQoof from "./WebQoof/WebQoof";

export default function CollectionComponent() {
  const [data, setData] = useState([]);
  const baseUrl =
    "https://thequint-malibu-beta.quintype.io/api/v1/collections/";

  useEffect(() => {
    async function fetchData() {
      const result = await axios(baseUrl + "home");
      setData(result.data.items.filter((item) => item.type === "collection"));
    }
    fetchData();
  }, []);

  const ThirdItem = data.slice(2, 3).map((item) => (
    <div key={item.id}>
      <WebQoof url={baseUrl + item.slug} name={item.name} />
    </div>
  ));

  return (
    <div className="collection-container">
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
