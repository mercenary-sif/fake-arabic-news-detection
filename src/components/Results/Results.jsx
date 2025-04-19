import ConfidenceCircle from "../Confidence/ConfidenceCircle";
import PredictionIcon from "../PredictionIcon/PredictionIcon";
import "./results.css";

const Results = ({ result, score }) => {
  return (
    <div className="fake_news_detection__results">
      <div className="fake_news_detection____result">
        <div className="fake_news_detection____result-prediction">
          <div className="fake_news_detection____result-prediction__icon">
            <PredictionIcon type={result} />
          </div>
          <div className="fake_news_detection____result-prediction__content">
            <h2>
              {result === "Real" && "This News Appears Real"}
              {result === "Fake" && " This News Appears Fake"}
              {result === "Doubtful" && "This News Seems Uncertain"}
            </h2>
            <p>
              {result === "Real" &&
                "Our AI model found no signs of misinformation. The article demonstrates credible language patterns and mentions verifiable entities. It likely represents trustworthy content."}
              {result === "Fake" &&
                "The article contains linguistic signals and patterns commonly found in misleading content. It lacks credible structure and may include fabricated or distorted facts."}
              {result === "Doubtful" &&
                "The AI analysis could not confidently classify the article as real or fake. It may include a mix of facts and opinions or lack sufficient information for reliable judgment."}
            </p>
          </div>
        </div>
        <div className="fake_news_detection____result-confidence">
          <ConfidenceCircle confidence={score} />
          <p> Confidence Score</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
