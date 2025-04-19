import { useEffect, useState } from "react";
import { HiOutlineDocumentText, HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsEmojiSmile } from "react-icons/bs";
import {
  A_Card,
  CrossValidate,
  N_Bubbles,
  P_Chart,
  Result,
  Subjectivity,
} from "../../components";
import "./analysis.css";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
const iconMap = {
  "Word Count": <HiOutlineDocumentText />,
  "Sentence Count": <HiOutlineMenuAlt2 />,
  Polarity: <BsEmojiSmile />,
};
const colorMap = {
  Nouns: "#42a5f5",
  Verbs: "#66bb6a",
  Adjectives: "#ab47bc",
  Organizations: "#ffa726",
  Others: "#ef5350",
};

const Analysis = ({ showVerify, data, news }) => {
  const [validation, setValidation] = useState(false);
  const [ValidationResult, setValidationResult] = useState("");
  const [ValidationReason, setValidationReason] = useState("");
  const [isloading, setIsloading] = useState(false);

  const [posData, setPosData] = useState([
    {
      metric: "Nouns",
      value: data.count_noun,
      color: colorMap["Nouns"],
    },
    {
      metric: "Verbs",
      value: data.count_verb,
      color: colorMap["Verbs"],
    },
    {
      metric: "Adjectives",
      value: data.count_adj,
      color: colorMap["Adjectives"],
    },
    {
      metric: "Organizations",
      value: data.count_org,
      color: colorMap["Organizations"],
    },
  ]);

  const [metricsData, setMetricsData] = useState([
      {
        name: "Subjectivity",
        subjectivity: 0 * 100 || 0,
      },
      {
        name: "Unique Words Ratio",
        unique_words_ratio: data.unique_words_ratio * 100 || 0,
      },
    ]);

  // This for transfer the person count , locations and organization
  const [circleData, setCircleData] = useState([
    {
      title: "Persons",
      value: data.count_per || 0,
      color: "#e74c3c", // Red
    },
    {
      title: "Locations",
      value: data.count_loc || 0,
      color: "#3498db", // Blue
    },
    {
      title: "Organizations",
      value: data.count_org || 0,
      color: "#2ecc71", // Green
    },
  ]);

  const CroseValidate = async () => {
    setIsloading(true);
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + "cross-validate",
        {
          text: news,
        }
      );

      if (response.status === 200) {
        setIsloading(false);
        setValidationResult(response.data.check);
        setValidationReason(response.data.reason);
        setValidation(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div
      className="fake_news_detection__analysis section__pedding"
      id="analysis"
    >
      {isloading && (
        <LoadingScreen
          loding_messege={
            " Validating the news ... please wait this gonna take a few seconds."
          }
        />
      )}
      {validation && (
        <CrossValidate
          result={ValidationResult}
          reasons={ValidationReason}
          done={() => setValidation(false)}
        />
      )}
      <div className="fake_news_detection__analysis-title">
        <h1> In-Depth News Authenticity Analysis </h1>
        <h3>
          Explore comprehensive AI-powered insights to understand the
          reliability, sentiment, and linguistic patterns of your news article.{" "}
        </h3>
      </div>
      <div className="fake_news_detection__analysis-container">
        <div className="fake_news_detection__analysis-container__title">
          <h2>Analysis</h2>
        </div>
        <Result
          result={data.prediction}
          score={(data.confidence * 100).toFixed(2)}
        />
        <div className="fake_news_detection__analysis-container-grid">
          <A_Card
            title="Word Count"
            value={data?.word_count}
            icon={iconMap["Word Count"]}
          />
          <A_Card
            title="Sentence Count"
            value={data?.sent_count}
            icon={iconMap["Sentence Count"]}
          />
          <A_Card
            title="Polarity"
            value={data?.polarity}
            icon={iconMap["Polarity"]}
          />
        </div>
        <div className="fake_news_detection__analysis-container-row">
          <div className="fake_news_detection__analysis-container-row__N_Bubbles">
            <N_Bubbles data={circleData} />
          </div>
          <div className="top-words-container">
            <div className="top-words-container__header">
              <h2>The most frequent words </h2>
            </div>
            {data.most_frequent_words.map((word, index) => (
              <div className="word-card" key={index}>
                <h3>{word.keyword}</h3>
                <p>
                  {word.count} uses — {(word.count / data.word_count).toFixed(2) * 100}%
                </p>
                <div className="word-bar-wrapper">
                  <div
                    className="word-bar"
                    style={{ width: `${word.count}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="fake_news_detection__analysis-container-row__second">
          <div className="fake_news_detection__analysis-container-row__SD">
            <Subjectivity data={metricsData} />
          </div>
          <div className="fake_news_detection__analysis-container-row__chart">
            <P_Chart data={posData} />
          </div>
        </div>
        <div className="fake_news_detection__analysis-container__btn">
          <button onClick={CroseValidate}>Validate the result</button>
          <button onClick={showVerify}>back to verify</button>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
