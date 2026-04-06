
exp8-single-output.py

# run this in first seperate cell 
# !pip install langchain cohere PyPDF2 langchain_text_splitters

# imports cell
import os
from langchain_text_splitters import RecursiveCharacterTextSplitter
from cohere import Client
import PyPDF2


# Set your Cohere API key
os.environ["COHERE_API_KEY"] = "yyvivSk77ANgabOkP7Z7vPJNp4aq7hTF5yU9CUR3"

# Initialize Cohere client
cohere_client = Client(api_key=os.getenv("COHERE_API_KEY"))

# Custom Prompt Template
prompt_template = """
You are an expert analyst. Analyze the following document and provide:

Summary (min 1000 words)

Key Points:
- Point 1
- Point 2
- Point 3

Action Items (if any)

Document:
{document}
"""

# Load document
def load_document(file_path):
    """Load PDF or TXT file"""
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

# Analyze function using Cohere Chat API
def analyze_document(document_text):
    prompt = prompt_template.format(document=document_text)
    response = cohere_client.chat(
        model="command-r-plus-08-2024",
        message=prompt,
        temperature=0.1
    )
    return response.text



# ============================================
# FILE PATH CONFIGURATION
# Choose ONE of the options below:
# ============================================

# Mount Google Drive (only if using google collab or jupyter notebook)
# drive.mount('/content/drive')

# OPTION 1: Google Drive path (use this in Colab)
# file_path = "/content/drive/MyDrive/ideas.pdf"

# OPTION 2: Colab local file (upload file in Colab sidebar)
# file_path = "/content/your-document.pdf"

# OPTION 3: Local file (use this when running locally)
# file_path = "./your-document.pdf"

# Currently using local sample file for testing: [upload the file in jupyter notebook]
file_path = "./test.pdf"

# Load and analyze
print(f"Loading document from: {file_path}")
document = load_document(file_path)
print(f"Document loaded successfully! Length: {len(document)} characters")

# Split long documents
splitter = RecursiveCharacterTextSplitter(chunk_size=2000, chunk_overlap=200)
chunks = splitter.split_text(document)
# To see the chunks of the documents
# print("chunks")
# print(chunks)
print(f"Document split into {len(chunks)} chunks")

# Analyze first chunk
print("\nAnalyzing document...")
result = analyze_document(chunks[0][:3000])
print("\n======== Result ========")
print(result)

