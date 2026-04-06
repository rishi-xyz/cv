import gensim
from gensim.models import Word2Vec
import numpy as np

# Small medical corpus (tokenized sentences) - expand with real texts
medical_corpus = [
    ['patient', 'presents', 'fever', 'cough', 'diagnosed', 'pneumonia'],
    ['doctor', 'prescribes', 'antibiotic', 'therapy', 'recovery'],
    ['surgery', 'performed', 'anesthesia', 'complication', 'risk'],
    ['nurse', 'monitors', 'vital', 'signs', 'blood', 'pressure'],
    ['oncology', 'chemotherapy', 'tumor', 'metastasis', 'remission'],
    ['radiology', 'xray', 'mri', 'scan', 'diagnosis'],
    ['pharmacy', 'dispenses', 'medication', 'dosage', 'side', 'effects'],
    ['emergency', 'trauma', 'resuscitation', 'intubation'],
    ['cardiology', 'ekg', 'arrhythmia', 'stent', 'bypass'],
    ['neurology', 'stroke', 'seizure', 'mri', 'therapy']
] * 50  # Repeat for more training data

# Train custom Word2Vec (skip-gram for rare terms)
model = Word2Vec(sentences=medical_corpus, vector_size=50, window=5, 
                 min_count=2, sg=1, epochs=20, workers=4)
model.save("medical_word2vec.model")  # Save for reuse
print("Medical Word2Vec trained!")

# Analysis: Domain similarities
print("Similar to 'pneumonia':", model.wv.most_similar('pneumonia', topn=5))
print("Similar to 'surgery':", model.wv.most_similar('surgery', topn=5))
print("'doctor' - 'patient' + 'nurse' ≈", 
      model.wv.most_similar(positive=['doctor', 'nurse'], negative=['patient'])[0][0])

# Compare with general model (if loaded)
# general = gensim.downloader.load('word2vec-google-news-300')
# print("General 'pneumonia' sim to 'fever':", general.similarity('pneumonia', 'fever'))
