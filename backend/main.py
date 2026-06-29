# from google import genai
import os
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
import google.generativeai as genai

app = FastAPI()

load_dotenv()

API_KEY = os.getenv("GEMMINI_API_KEY")

genai.configure(api_key = API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")

class PromptRequest(BaseModel):
    prompt: str

@app.post("/gen")
def generate_prompt(req :PromptRequest):
    res = model.generate_content(req.prompt)
    return {
        "response" : res.text
    }



# print(interaction.output_text)

