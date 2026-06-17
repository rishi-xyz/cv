import os
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.llms import Cohere
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory
import PyPDF2

# Installation (run once)
# pip install langchain langchain-community faiss-cpu sentence-transformers cohere pypdf

# Set Cohere API key
os.environ["COHERE_API_KEY"] = "your-cohere-api-key-here"

class IPCChatbot:
    def __init__(self, pdf_path="IPC_1860.pdf"):
        self.pdf_path = pdf_path
        self.llm = Cohere(model="command-r-plus", temperature=0.1)
        self.memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
        self.chain = None
        self.load_documents()
    
    def load_documents(self):
        """Load and process IPC PDF"""
        print("📥 Loading Indian Penal Code document...")
        
        # Download IPC if not exists (direct link to official PDF)
        if not os.path.exists(self.pdf_path):
            print("Downloading IPC from official source...")
            import urllib.request
            urllib.request.urlretrieve(
                "https://www.iitk.ac.in/wc/data/IPC_186045.pdf", 
                self.pdf_path
            )
        
        # Load PDF
        loader = PyPDFLoader(self.pdf_path)
        documents = loader.load()
        
        # Split into chunks for better retrieval
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1500,
            chunk_overlap=200,
            length_function=len,
        )
        splits = text_splitter.split_documents(documents)
        
        # Create embeddings and vector store
        embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
        vectorstore = FAISS.from_documents(splits, embeddings)
        
        # Create RAG chain
        self.chain = ConversationalRetrievalChain.from_llm(
            self.llm,
            vectorstore.as_retriever(search_kwargs={"k": 4}),
            memory=self.memory,
            return_source_documents=True
        )
        print("✅ IPC Chatbot ready!")
    
    def ask(self, question):
        """Ask question about IPC"""
        result = self.chain({"question": question})
        answer = result["answer"]
        sources = result["source_documents"]
        
        return {
            "answer": answer,
            "sources": [doc.metadata for doc in sources],
            "context": [doc.page_content[:200] + "..." for doc in sources]
        }

# Initialize and run chatbot
def main():
    chatbot = IPCChatbot()
    
    print("\n🤖 **IPC Legal Assistant Ready**")
    print("Ask questions about Indian Penal Code sections, punishments, definitions...")
    print("Type 'quit' to exit\n")
    
    while True:
        question = input("You: ").strip()
        if question.lower() in ['quit', 'exit', 'bye']:
            print("👋 Thank you for using IPC Chatbot!")
            break
        
        if question:
            response = chatbot.ask(question)
            print(f"\n🤖 IPC Bot: {response['answer']}")
            print(f"\n📄 Sources: Pages {', '.join([str(s.get('page', 'N/A')) for s in response['sources']])}")
            print("-" * 80)

if __name__ == "__main__":
    main()
