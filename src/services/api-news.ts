import axios from "axios";

// Defining the NewsProps Interface
export interface NewsProps {
  title: string;
  content: string;
}

// Function to fetch the news
export const getNews = async (): Promise<NewsProps[]> => {
  // Use the proxy path instead of the full API URL
  const API = import.meta.env.VITE_NEWS_API_KEY;
  const url = `/api/news?q=keyword&apiKey=${API}`; // Use proxy path

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
