import os
from typing import Optional
from pydantic import BaseModel, Field, validator
from langchain_community.llms import Cohere
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.output_parsers import PydanticOutputParser
from langchain_community.utilities import WikipediaAPIWrapper

# Set Cohere API key
os.environ["COHERE_API_KEY"] = "your-cohere-api-key-here"

# Pydantic Schema for Institution Details
class InstitutionDetails(BaseModel):
    founder: str = Field(..., description="Name of the founder(s)")
    founded_year: str = Field(..., description="Year founded (e.g., '1886')")
    current_branches: list[str] = Field(..., description="List of current branches/campuses")
    employee_count: str = Field(..., description="Number of employees (e.g., '5,000+')")
    summary: str = Field(..., description="4-line summary (max 4 sentences)")

    class Config:
        arbitrary_types_allowed = True

# Custom Output Parser
output_parser = PydanticOutputParser(pydantic_object=InstitutionDetails)

# Wikipedia loader
wiki = WikipediaAPIWrapper()

# Prompt Template
prompt = PromptTemplate(
    template="""
    Extract institutional details from Wikipedia. Provide ONLY valid JSON matching this schema: {format_instructions}
    
    Institution: {institution_name}
    
    Use Wikipedia information to fill these fields accurately:
    - founder: Primary founder(s) name
    - founded_year: Exact year of establishment  
    - current_branches: List current campuses/branches
    - employee_count: Approximate employee numbers
    - summary: Exactly 4 sentences maximum
    
    Wikipedia Context: {wiki_context}
    
    Respond with valid JSON only:""",
    input_variables=["institution_name", "wiki_context"],
    partial_variables={"format_instructions": output_parser.get_format_instructions()}
)

# Initialize LLM and Chain
llm = Cohere(model="command-r-plus", temperature=0.1)
chain = LLMChain(llm=llm, prompt=prompt, output_parser=output_parser)

def analyze_institution(institution_name: str):
    """Main function to analyze institution"""
    # Fetch Wikipedia context
    try:
        wiki_page = wiki.run(institution_name)
        context = wiki_page[:4000]  # Truncate for prompt limits
    except:
        context = f"No Wikipedia page found for {institution_name}"
    
    # Invoke chain
    result = chain.invoke({
        "institution_name": institution_name,
        "wiki_context": context
    })
    
    return result['text']

# Example Usage
if __name__ == "__main__":
    institution = input("Enter Institution Name: ")
    
    print(f"\nAnalyzing {institution}...")
    result = analyze_institution(institution)
    
    print("\n📋 Institution Details:")
    print(f"Founder: {result.founder}")
    print(f"Founded: {result.founded_year}")
    print(f"Branches: {', '.join(result.current_branches)}")
    print(f"Employees: {result.employee_count}")
    print(f"\n📄 Summary:")
    print(result.summary)
