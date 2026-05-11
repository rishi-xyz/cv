import nltk
from nltk.util import ngrams
from collections import Counter, defaultdict

nltk.download('punkt')

sentences = [
    "The quick brown fox jumps over the lazy dog",
    "The dog barks at the fox",
    "The fox is quick and the dog is lazy",
    "The quick dog jumps over the lazy fox"
]

def preprocess(sentences):
    tokenized_sentences = [
        nltk.word_tokenize(sentence.lower()) for sentence in sentences
    ]
    return tokenized_sentences

def generate_ngrams(tokens, n):
    return list(ngrams(tokens, n))

def calculate_ngram_probabilities(tokenized_sentences, n):
    ngram_counts = Counter()
    n_minus_1_gram_counts = Counter()
    for tokens in tokenized_sentences:
        ngram_counts.update(generate_ngrams(tokens, n))
        if n > 1:
            n_minus_1_gram_counts.update(generate_ngrams(tokens, n - 1))
    probabilities = defaultdict(float)
    for ngram in ngram_counts:
        if n == 1:
            probabilities[ngram] = ngram_counts[ngram] / sum(ngram_counts.values())
        else:
            probabilities[ngram] = ngram_counts[ngram] / n_minus_1_gram_counts[ngram[:-1]]
    return probabilities

def display_ngram_probabilities(probabilities, n):
    print(f"\n{n}-Gram Probabilities:")
    for ngram, prob in probabilities.items():
        print(f"{' '.join(ngram)}: {prob:.4f}")

def analyze_ngrams(sentences):
    tokenized_sentences = preprocess(sentences)
    for n in [1, 2, 3]:
        probabilities = calculate_ngram_probabilities(tokenized_sentences, n)
        display_ngram_probabilities(probabilities, n)

analyze_ngrams(sentences)
