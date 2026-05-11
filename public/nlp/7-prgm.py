import nltk
from nltk.corpus import wordnet

nltk.download('wordnet')
nltk.download('omw-1.4')

def find_synonyms_antonyms(word):
    synonyms = set()
    antonyms = set()
    for syn in wordnet.synsets(word):
        for lemma in syn.lemmas():
            synonyms.add(lemma.name())
            if lemma.antonyms():
                antonyms.add(lemma.antonyms()[0].name())
    return list(synonyms), list(antonyms)

synonyms, antonyms = find_synonyms_antonyms('active')
print("Synonyms of 'active':", synonyms)
print("Antonyms of 'active':", antonyms)
