const Training_steps  = [
    { title: 'Data Collection & Curation',
      text : `We gather news articles from diverse web sources, ensuring a balanced dataset of real and fake news. ,  Sources are verified and labeled based on credibility to serve as ground truth for training.`
    },
    { title: 'Text Preprocessing & Tokenization',
     text : `We clean the text by removing special characters, stopwords, and redundant data. , The text is tokenized (split into meaningful units) to prepare it for deeper analysis.`
   },
   { title: 'Feature Extraction',
     text : `Linguistic & Stylistic Analysis: Detects patterns such as alarmist language, excessive punctuation, and emotionally charged words. , Sentiment & Readability Scores: Evaluates how persuasive or misleading the content may be. , Named Entity Recognition (NER): Extracts key persons, organizations, and locations to assess credibility.`
   },
   { title: 'Training with Transformer-Based AI (AraBERT)',
     text : `We leverage AraBERT, a transformer model specialized for Arabic text, to classify news articles. , The model learns complex linguistic patterns and context to distinguish real from fake news.`
   }
   ,{ title: 'Enhancing Classification with an LLM (Gemini AI)',
     text : `AraBERT’s predictions are refined using Gemini AI, which cross-verifies patterns and strengthens accuracy. , The model adapts to new patterns in misinformation through continuous learning.`
   },
   { title: 'Cross-Validation with Trusted Sources',
     text : `The final prediction is validated by checking against verified news databases and reputable sources , This ensures robustness and reliability in classification.`
   }
 ]

 export default Training_steps;