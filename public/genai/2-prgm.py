import gensim.downloader as api
import numpy as np
from sklearn.manifold import TSNE
import matplotlib.pyplot as plt
import pandas as pd

# Load model (downloads ~1.6GB first time)
print("Loading Word2Vec GoogleNews...")
model = api.load('word2vec-google-news-300')

# Tech domain words
tech_words = ['computer', 'algorithm', 'neural', 'python', 'java', 'database', 
              'server', 'network', 'machine', 'learning']

# Extract embeddings
embeddings = np.array([model[word] for word in tech_words])
words = np.array(tech_words)

# t-SNE reduction to 2D
tsne = TSNE(n_components=2, random_state=42, perplexity=5)
embed_2d = tsne.fit_transform(embeddings)

# Plot
plt.figure(figsize=(10, 8))
scatter = plt.scatter(embed_2d[:, 0], embed_2d[:, 1])
for i, word in enumerate(words):
    plt.annotate(word, (embed_2d[i, 0], embed_2d[i, 1]), xytext=(5, 2), 
                 textcoords='offset points')
plt.title('t-SNE Visualization: Tech Word Embeddings')
plt.xlabel('t-SNE Dimension 1')
plt.ylabel('t-SNE Dimension 2')
plt.grid(True)
plt.show()

# Function: 5 semantically similar words
def get_similar_words(input_word, topn=5):
    try:
        similar = model.most_similar(input_word, topn=topn)
        return [(word, round(sim, 3)) for word, sim in similar]
    except:
        return f"'{input_word}' not in vocabulary"

# Examples
print("\nSimilar words:")
for word in ['python', 'neural', 'server']:
    print(f"{word}: {get_similar_words(word)}")
