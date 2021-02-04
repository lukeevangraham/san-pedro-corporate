import React from "react"

const TopNews = ({ data }) => (
    <div>Top News{console.log("data: ", data)}
        {data.FeaturedNews.map(article => (
            <div key={article.id}>{article.title}</div>
        ))}
    </div>
)

export default TopNews;