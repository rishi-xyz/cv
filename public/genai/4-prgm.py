import gensim.downloader as api
import nltk
from nltk.tokenize import word_tokenize
import string
import random

nltk.download('punkt_tab', quiet=True)

# Load pre-trained embeddings
print("Loading GloVe embeddings...")
word_vectors = api.load('glove-wiki-gigaword-100')

def enrich_prompt(original_prompt, key_terms, topn=2):
    """Enrich prompt by replacing key terms with similar words."""
    words = word_tokenize(original_prompt.lower())
    enriched_words = []
    
    for word in words:
        cleaned = word.strip(string.punctuation)
        if cleaned in key_terms:
            try:
                similar = word_vectors.most_similar(cleaned, topn=topn)
                # Pick random similar word for variety
                replacement = random.choice([w for w, _ in similar])
                enriched_words.append(replacement)
            except:
                enriched_words.append(cleaned)
        else:
            enriched_words.append(word)
    
    return ' '.join(enriched_words)

def simulate_genai(prompt, model="gpt-like"):
    """Simulate GenAI response (replace with real API call)."""
    # Placeholder - replace with actual API
    base_responses = {
        "king": "The king ruled wisely over his kingdom.",
        "monarch": "The monarch governed with absolute authority.",
        "ruler": "The ruler maintained peace through strength.",
        "queen": "The queen led with grace and determination."
    }
    return base_responses.get(prompt.split()[0], "Generic response generated.")

# Example usage
original_prompt = "Explain the role of the king in medieval Europe."
key_terms = ["king"]  # Target for enrichment

enriched_prompt = enrich_prompt(original_prompt, key_terms)
print("Original:", original_prompt)
print("Enriched:", enriched_prompt)

# Generate responses
orig_response = simulate_genai(original_prompt)
enrich_response = simulate_genai(enriched_prompt)

print("\nOriginal Response:", orig_response)
print("Enriched Response:", enrich_response)
