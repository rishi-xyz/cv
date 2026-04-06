import gensim.downloader as api
import random

# Load lightweight pre-trained embeddings (~120MB)
print("Loading embeddings...")
model = api.load('glove-wiki-gigaword-100')

def generate_similar_words(seed_word, topn=8):
    """Retrieve top similar words."""
    try:
        similar = model.most_similar(seed_word, topn=topn)
        return [word for word, _ in similar]
    except KeyError:
        return [seed_word] * topn  # Fallback

def create_paragraph(seed_word, similar_words, length=5):
    """Construct creative paragraph using seed + similar words."""
    templates = [
        "In the {adj1} realm of {noun1}, the {noun2} wandered through {places}, seeking {abstract1}.",
        "The {noun1} discovered a {adj1} {noun2} hidden among {places}, filled with {abstract1}.",
        "Amidst {places}, {noun1} confronted {noun2}, revealing truths of {abstract1}."
    ]
    
    # Categorize words roughly by length/pattern (noun-like, adj-like, etc.)
    nouns = [w for w in similar_words[:3] if len(w) > 4]
    adjs = [w for w in similar_words[3:6] if len(w) < 8]
    abstracts = similar_words[6:]
    places = nouns[1:] + [seed_word]
    
    template = random.choice(templates)
    paragraph = template.format(
        adj1=random.choice(adjs + [seed_word]),
        noun1=random.choice(nouns + [seed_word]),
        noun2=random.choice(nouns),
        places=", ".join(places[:2]),
        abstract1=random.choice(abstracts + [seed_word])
    )
    return paragraph.capitalize() + "."

# Example usage
seed = "adventure"
similar = generate_similar_words(seed)
print(f"Seed: {seed}")
print(f"Similar words: {', '.join(similar)}")
print("\nGenerated Paragraph:")
print(create_paragraph(seed, similar))
