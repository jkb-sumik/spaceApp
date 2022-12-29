import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      await fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=10")
        .then((res) => res.json())
        .then((news) => setNews(news));
    };
    fetchNews();
  }, []);

  return (
    <div>
      {news.map((item) => (
        <div key={item.id}>
          <a href={item.url} rel="noreferrer" target="_blank">
            <h2>{item.title}</h2>
          </a>
        </div>
      ))}
    </div>
  );
};

export default News;
