import { useEffect, useState } from "react"

const NewsFeed = () => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {
        const axios = require("axios").default;

        const options = {
            method: 'GET',
            url: 'http://localhost:8000/news'
        }

        axios.request(options).then((response) => {
            // console.log(response.data)
            setArticles(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    const firstSevenArticles = articles?.slice(0, 7)

    return (
        <div className="news-feed">
           <h2>News Feed</h2>
            {firstSevenArticles?.map((article, _index) => (
                <div key={_index}>
                    <a href={article.url}><li>{article.title}</li></a>
                </div>))}
        </div>
    )
}

export default NewsFeed