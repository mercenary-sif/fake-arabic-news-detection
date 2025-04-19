import "./newsinput.css";
import { MdVerified } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

const NewsInput = ({ isloading, cancel, result }) => {
  const [news, setNews] = useState("");
  console.log('BASE URL', process.env.REACT_APP_BASE_URL)
  const handleAnalyze = async () => {
    const arabicRegex = /[\u0600-\u06FF]/;
    if (news === "" || !arabicRegex.test(news)) {
      cancel(true);
      return;
    }

    // Show loading
    // false means !L = true → loading
    isloading(false);

    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + "verify",
        {
          "text": news,
        }
      );
      if (response.status === 200) {
        isloading(true);
        result(response.data, news);
      }
    } catch (error) {
      console.error(error);
    } finally {
      isloading(true); // true means !L = false → not loading
    }
  };

  return (
    <div className="fake_news_detection__newsInput">
      <h2 className="fake_news_detection__newsInput-header">
        Enter News Article
      </h2>
      <textarea
        className="fake_news_detection__textarea"
        placeholder="Paste the arabic news article here..."
        value={news}
        onChange={(e) => setNews(e.target.value)}
      />
      <button className="fake_news_detection__button" onClick={handleAnalyze}>
        Check Authenticity
        <MdVerified />
      </button>
    </div>
  );
};

export default NewsInput;
