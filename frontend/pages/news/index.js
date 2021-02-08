// import React from "react";
import { getSortedNewsData } from "../../utils/api";

export async function getStaticProps() {
  const allNewsData = await getSortedNewsData();

  return {
    props: {
      allNewsData,
      metadata: {
        metaTitle: "San Pedro Presbyterian Church News",
        metaDescription: "Get the latest information on San Pedro Presbyterian Church in San Antonio, Texas."
      }
    },
  };
}

const News = ({allNewsData}) => (
  <div>Here are the news pages:
    {allNewsData.map((article) => (
      <div key={article.id}>{article.title}</div>
    ))}
  </div>
);

export default News;
