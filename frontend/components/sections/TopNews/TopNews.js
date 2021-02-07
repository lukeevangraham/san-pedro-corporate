import React from "react"

const TopNews = ({ data }) => (
    <div>Top News
        {data.FeaturedNews.map(article => (
            <div key={article.id}>{article.title}</div>
        ))}
    </div>
)

export default TopNews;