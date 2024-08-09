import { Link } from "react-router-dom";
import { NewsProps, getNews } from "../../services/api-news";
import { useEffect, useState } from "react";

const NewsCard = () => {
  const [news, setNews] = useState<NewsProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getNews()
      .then((res) => {
        setNews(res[1]);
      })
      .catch(() => {
        setError("Failure to Load Article");
      });
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="card-style">
        <Link to="/news">
          <h3 className="text-sm font-medium mb-2">News</h3>
          <h4 className="font-medium mb-3">Breaking News: {news?.title}</h4>
          <a
            className="text-xs bg-blue-gradient bg-clip-text text-transparent"
            href="#"
          ></a>
        </Link>
      </div>
    </>
  );
};

export default NewsCard;
