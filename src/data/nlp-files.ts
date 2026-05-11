export interface NLPFiles {
  name: string;
  description: string;
  path: string;
}

export const nlpFiles: NLPFiles[] = [
  {
    name: "1-prgm.py",
    description: "Text Preprocessing - Tokenization, filtration, script validation, stop word removal & stemming",
    path: "/nlp/1-prgm.py",
  },
  {
    name: "2-prgm.py",
    description: "N-gram Modeling - Unigram, bigram & trigram probability distribution with Laplace smoothing",
    path: "/nlp/2-prgm.py",
  },
  {
    name: "3-prgm.py",
    description: "Minimum Edit Distance - Dynamic programming string comparison with DP table visualization",
    path: "/nlp/3-prgm.py",
  },
  {
    name: "4-prgm.py",
    description: "Top-Down & Bottom-Up Parser - Recursive descent and chart parsing with CFG",
    path: "/nlp/4-prgm.py",
  },
  {
    name: "5-prgm.py",
    description: "Naive Bayes Classifier - Movie review genre classification with add-1 smoothing",
    path: "/nlp/5-prgm.py",
  },
  {
    name: "7-prgm.py",
    description: "WordNet Synonyms & Antonyms - Lexical relationships using WordNet corpus",
    path: "/nlp/7-prgm.py",
  },
];
