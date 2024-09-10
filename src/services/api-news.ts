import axios from "axios";

// Defining the NewsProps Interface
export interface NewsProps {
  title: string;
  content: string;
}

// Function to fetch the news

export const getNews = async (): Promise<NewsProps[]> => {
  // Using the News API key from the .env file
  const API = import.meta.env.VITE_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API}`;

  // Using axios to fetch data from the API, then returning the data as a response
  return axios.get(url).then((res) => {
    const data = res.data.articles;
    const newsData: NewsProps[] = data.map((article: NewsProps) => {
      return {
        title: article.title,
        content: article.content,
      };
    });
    return newsData;
  });
};
