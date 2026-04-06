import ssl
import gensim.downloader as api

# Disable SSL verification (temporary fix)
ssl._create_default_https_context = ssl._create_unverified_context

print("Loading Google News Word2Vec model...")
model = api.load("word2vec-google-news-300")
print("Model loaded successfully!")

# Example 1: Check word vector and similarity
print("\nVector for 'king':", model['king'][:10], "...")  # First 10 dims
print("Similarity between 'king' and 'queen':", model.similarity('king', 'queen'))

# Example 2: Vector arithmetic - king - man + woman ≈ queen
result_vec = model['king'] - model['man'] + model['woman']
similar_words = model.most_similar(positive=[result_vec], topn=5)
print("\n'king' - 'man' + 'woman' ≈", similar_words[0][0], "with similarity", round(similar_words[0][1], 3))

# Example 3: More analogies using most_similar
print("\nOther analogies:")
print("Paris - France + Italy ≈", model.most_similar(positive=['Paris', 'Italy'], negative=['France'])[0][0])
print("boy - child + woman ≈", model.most_similar(positive=['boy', 'woman'], negative=['child'])[0][0])
print("Germany - Berlin + France ≈", model.most_similar(positive=['Germany', 'France'], negative=['Berlin'])[0][0])

# Example 4: Custom arithmetic and nearest neighbors
custom_vec = model['doctor'] - model['hospital'] + model['school']
print("\n'doctor' - 'hospital' + 'school' nearest:", [word for word, _ in model.most_similar(positive=[custom_vec], topn=3)])

print("\nExploration complete!")
