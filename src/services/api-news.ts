import axios from "axios";

// Defining the NewsProps Interface
export interface NewsProps {
  title: string;
  content: string;
}

// Function to fetch the news

export const getNews = async (): Promise<NewsProps[]> => {
  const API = "0fed9c4f4da54942aa6ffecbf2dd9a68";
  const url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API}`;

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
