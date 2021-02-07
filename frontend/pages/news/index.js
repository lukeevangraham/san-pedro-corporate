// import React from "react";
import { getSortedNewsData } from "../../utils/api";

export async function getStaticProps() {
  const allNewsData = getSortedNewsData();
  return {
    props: {
      allNewsData,
    },
  };
}

const News = (props) => <div>Here is the news pages</div>;

export default News;
