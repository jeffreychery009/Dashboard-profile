import { useEffect, useState } from "react";
import { getNews, NewsProps } from "../services/api-news";

const News = () => {
  const [news, setNews] = useState<NewsProps[] | null>(null);
  const [error, seterror] = useState<string | null>(null);

  useEffect(() => {
    getNews()
      .then((data) => {
        setNews(data);
      })
      .catch(() => {
        seterror("Failed to fetch news data");
      });
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-2xl text-red-600 bg-red-100 border border-red-400 p-4 rounded-md shadow-md">
          <strong>Error:</strong> {error}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white p-5 m-5 shadow-md rounded-lg max-w-80 dark:bg-gray-900">
        <h1 className="text-xl font-medium dark:text-gray-100">
          Read the News
        </h1>
        <p className="text-gray-500 text-sm dark:text-gray-400">
          Read different news articles
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
        {news?.slice(0, 40).map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 dark:bg-gray-900"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3 dark:text-gray-100">
              {item.title}
            </h2>
            <p className="text-gray-600 line-clamp-3 dark:text-gray-400">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
