
exp8-multi-output.py

# run this in first seperate cell 
# !pip install langchain cohere PyPDF2 langchain_text_splitters

# imports cell
import os
from langchain_text_splitters import RecursiveCharacterTextSplitter
from cohere import Client
import PyPDF2


# Set your Cohere API key
os.environ["COHERE_API_KEY"] = "pd0lgM1FvVz8MppXxHH6lJpnxdgSdx2NFWLcADW1"

# Initialize Cohere client
cohere_client = Client(api_key=os.getenv("COHERE_API_KEY"))

# Prompt for chunk-level summary
chunk_prompt_template = """
You are an expert analyst. Analyze the following document chunk and provide:

Summary (max 100 words)

Key Points:
- Point 1
- Point 2
- Point 3

Chunk:
{document}
"""

# Prompt for final summary
final_prompt_template = """
You are an expert analyst. Given the following summaries of document chunks, provide:

Final Consolidated Summary (max 150 words)

Overall Key Insights:
- Insight 1
- Insight 2
- Insight 3

Summaries:
{summaries}
"""

# Load document
def load_document(file_path):
    if file_path.endswith('.pdf'):
        with open(file_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""
            for page in pdf_reader.pages:
                text += page.extract_text()
        return text
    else:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()

# Analyze chunk
def analyze_chunk(text):
    prompt = chunk_prompt_template.format(document=text)
    response = cohere_client.chat(
        model="command-r-plus-08-2024",
        message=prompt,
        temperature=0.1
    )
    return response.text

# Final summary
def analyze_final(summaries):
    combined = "\n\n".join(summaries)
    prompt = final_prompt_template.format(summaries=combined)

    response = cohere_client.chat(
        model="command-r-plus-08-2024",
        message=prompt,
        temperature=0.1
    )
    return response.text

# ============================================
# FILE PATH [first upload the test pdf  file in jupyter notebook]
# ============================================
file_path = "./test.pdf"

print(f"Loading document from: {file_path}")
document = load_document(file_path)
print(f"Document loaded! Length: {len(document)} characters")

# Split document
splitter = RecursiveCharacterTextSplitter(chunk_size=2000, chunk_overlap=200)
chunks = splitter.split_text(document)

print(f"Document split into {len(chunks)} chunks")

# Analyze all chunks
chunk_summaries = []

print("\nAnalyzing chunks...\n")
for i, chunk in enumerate(chunks):
    print(f"Processing chunk {i+1}/{len(chunks)}...")
    
    summary = analyze_chunk(chunk[:3000])  # safe token limit
    chunk_summaries.append(summary)

# Print chunk summaries
print("\n======== Chunk Summaries ========")
for i, s in enumerate(chunk_summaries):
    print(f"\n--- Chunk {i+1} ---\n{s}")

# Final summary
print("\nGenerating final summary...\n")
final_summary = analyze_final(chunk_summaries)

print("\n======== Final Summary ========")
print(final_summary)

