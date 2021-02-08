import { getAllNewsSlugs, getNewsData } from "../../utils/api";

export async function getStaticPaths() {
  const paths = await getAllNewsSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("params: ", params);
  const newsData = await getNewsData(params.slug);
  console.log("newsData: ", newsData);
  return {
    props: {
      newsData,
      metadata: {
        metaTitle: "San Pedro Presbyterian Church News",
        metaDescription: "Get the latest information on San Pedro Presbyterian Church in San Antonio, Texas."
      }
    },
  };
}

export default function News({ newsData }) {
  return <div>Here is a news page: {newsData.title}</div>;
}
