# from google import genai
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import google.generativeai as genai



app = FastAPI()

load_dotenv()


origins = [
    "http://localhost:5173",
    
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, # Use ["*"] to allow all domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.getenv("GEMMINI_API_KEY")

genai.configure(api_key = API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash-lite")

class PromptRequest(BaseModel):
    prompt: str

@app.post("/gen")
def generate_prompt(req :PromptRequest):
    response = model.generate_content(req.prompt)
    return {
        "response" : response.text
    }

