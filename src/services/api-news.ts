// Define the NewsProps type
type NewsProps = {
  title: string;
  content: string;
};

// Function to fetch the news
export const getNews = async (): Promise<NewsProps[]> => {
  // Using the News API key from the environment variable
  const API = import.meta.env.VITE_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API}`; // Direct API call

  // Using fetch to request the news data
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const newsData: NewsProps[] = data.articles.map((article: NewsProps) => ({
      title: article.title,
      content: article.content,
    }));
    return newsData;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
};
