import re
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

nltk.download('punkt')
nltk.download('stopwords')

text = """Natural Language Processing is a fascinating field of AI. It involves
processing human languages, like English!"""

def tokenize(text):
    return word_tokenize(text)

def filter_text(tokens):
    filtered_tokens = [re.sub(r'[^\w\s]', '', token) for token in tokens]
    filtered_tokens = [token for token in filtered_tokens if token.isalpha()]
    return filtered_tokens

def validate_script(tokens):
    english_tokens = [token for token in tokens if re.match(r'^[a-zA-Z]+$', token)]
    return english_tokens

def remove_stopwords(tokens):
    stop_words = set(stopwords.words('english'))
    return [token for token in tokens if token.lower() not in stop_words]

def stem_tokens(tokens):
    stemmer = PorterStemmer()
    return [stemmer.stem(token) for token in tokens]

def preprocess_text(text):
    print(f"Original Text:\n{text}\n")
    tokens = tokenize(text)
    print(f"Tokens:\n{tokens}\n")
    filtered_tokens = filter_text(tokens)
    print(f"Filtered Tokens:\n{filtered_tokens}\n")
    validated_tokens = validate_script(filtered_tokens)
    print(f"Validated Tokens (English Only):\n{validated_tokens}\n")
    tokens_no_stopwords = remove_stopwords(validated_tokens)
    print(f"Tokens after Stop Word Removal:\n{tokens_no_stopwords}\n")
    stemmed_tokens = stem_tokens(tokens_no_stopwords)
    print(f"Stemmed Tokens:\n{stemmed_tokens}\n")
    return stemmed_tokens

preprocessed_tokens = preprocess_text(text)
