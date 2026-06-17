export interface GenAIFiles {
  name: string;
  description: string;
  path: string;
}

export const genaiFiles: GenAIFiles[] = [
  {
    name: "1-prgm.py",
    description: "Word Embeddings - Google News Word2Vec analogies",
    path: "/genai/1-prgm.py",
  },
  {
    name: "2-prgm.py",
    description: "t-SNE Visualization - 2D tech word embeddings plot",
    path: "/genai/2-prgm.py",
  },
  {
    name: "3-prgm.py",
    description: "Custom Word2Vec - Medical domain embedding training",
    path: "/genai/3-prgm.py",
  },
  {
    name: "4-prgm.py",
    description: "Prompt Enrichment - GloVe-powered prompt augmentation",
    path: "/genai/4-prgm.py",
  },
  {
    name: "5-prgm.py",
    description: "Text Generation - Creative paragraph from similar words",
    path: "/genai/5-prgm.py",
  },
  {
    name: "6-prgm.py",
    description: "Sentiment Analysis - HuggingFace review classification",
    path: "/genai/6-prgm.py",
  },
  {
    name: "7-prgm.py",
    description: "Text Summarization - BART model summarization",
    path: "/genai/7-prgm.py",
  },
  {
    name: "8-prgm-multi.py",
    description: "Multi-Chunk Analysis - Cohere API PDF analysis",
    path: "/genai/8-prgm-multi.py",
  },
  {
    name: "8-prgm-single.py",
    description: "Single Doc Analysis - Cohere API document summarization",
    path: "/genai/8-prgm-single.py",
  },
  {
    name: "9-prgm.py",
    description: "Institution Details - Pydantic schema with Wikipedia extraction",
    path: "/genai/9-prgm.py",
  },
  {
    name: "10-prgm.py",
    description: "IPC Chatbot - RAG-based legal assistant with Cohere",
    path: "/genai/10-prgm.py",
  },
];
