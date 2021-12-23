import { useEffect, useState } from "react"

const NewsFeed = () => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {
        const axios = require("axios").default;

        const options = {
        method: 'GET',
        url: 'https://crypto-news-live.p.rapidapi.com/news',
        headers: {
            'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
        }
        };

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