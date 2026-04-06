import os
import torch
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

os.environ["HF_HUB_DISABLE_SYMLINKS_WARNING"] = "1"

# Load model and tokenizer
model_name = "facebook/bart-large-cnn"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

model.eval()  # Set model to evaluation mode

# Input text
text = (
    "Artificial intelligence has revolutionized multiple industries through machine learning advancements. "
    "Neural networks, particularly transformer architectures, power modern language models like GPT and BERT. "
    "Applications range from healthcare diagnostics to autonomous vehicles and financial forecasting. "
    "Challenges remain in ethical AI deployment, bias mitigation, and computational efficiency."
)

# Tokenize input text
inputs = tokenizer(
    text,
    return_tensors="pt",
    truncation=True,
    max_length=1024
)

# Generate summary
with torch.no_grad():
    summary_ids = model.generate(
        inputs["input_ids"],
        max_new_tokens=60,
        min_length=25,
        num_beams=4
    )

# Decode summary
summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)

print("SUMMARY:")
print(summary)
