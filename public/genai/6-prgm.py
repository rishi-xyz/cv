from transformers import pipeline

# Load pre-trained sentiment analysis pipeline
print("Loading Hugging Face sentiment pipeline...")
sentiment_pipeline = pipeline("sentiment-analysis")

# Real-world application: Analyze customer reviews
reviews = [
    "The product exceeded my expectations with fast delivery and excellent quality!",
    "Service was poor, late delivery and damaged packaging. Very disappointed.",
    "Average experience - works fine but nothing special about it.",
    "Outstanding customer support resolved my issue within hours!",
    "Overpriced for what it offers, expected much better performance."
]

print("\nSentiment Analysis Results:")
for i, review in enumerate(reviews, 1):
    result = sentiment_pipeline(review)[0]
    label = result['label']
    score = f"{result['score']:.3f}"
    print(f"{i}. '{review[:50]}...' → {label} ({score})")
