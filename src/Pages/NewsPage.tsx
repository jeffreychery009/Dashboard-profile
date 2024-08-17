import { useEffect, useState } from "react";
import profileImage from "../assets/ProfileImage.jpg";
import Menu from "../assets/list.svg";
import Navigation from "../components/Navigation";
import { NewsProps, getNews } from "../services/api-news";

const NewsPage = () => {
  const [news, setNews] = useState<NewsProps[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [isNavOpen, setIsNavOpen] = useState(false);

  //Retrieving news data from API
  useEffect(() => {
    getNews()
      .then((res) => {
        setNews(res);
      })
      .catch(() => {
        setError("Failure to Load Article");
      });
  }, []);

  if (error) return <div>{error}</div>;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <div>
        <div className="custom-mobile:flex justify-between items-center mb-[80px] custom-tablet: flex">
          <button onClick={toggleNav}>
            <img src={Menu} alt="menu icon" />
          </button>
          <h1 className="h1-style text-center ">Dashboard.io</h1>
          <img
            className="w-[28px] h-[28px] rounded-full"
            src={profileImage}
            alt=""
          />
        </div>
        <Navigation isOpen={isNavOpen} toggleNav={toggleNav} />
      </div>
      <div>
        <h2 className="text-md font-semibold mb-4">News</h2>
      </div>
      <div>
        {news &&
          news.slice(0, 5).map((article, index) => (
            <div
              key={index}
              className="custom-tablet:flex custom-tablet:justify-center"
            >
              <div className="card-style-news mb-10  custom-tablet:mx-0">
                <h2 className="text-md font-medium mb-4 custom-tablet:ml-4">
                  {article.title}
                </h2>
                <p className="mb-10 custom-tablet:ml-4">{article.content}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default NewsPage;
