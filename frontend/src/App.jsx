// function prompt

import axios from "axios"
import { useState } from "react"
import "./App.css"
import chickenImg from './huhhh.png'; // Adjust path to your file

// function MyComponent() {
//   return ;
// }





function setPrompt(dd){

  prompt = dd;

}

let count = 0;

// console.log(prompt)





function App(){
  const [prompt, setPrompt] = useState("")
  const [output, setResponse] = useState("reponsee")
  // console.log(prompt)
  function handleChange(event){
    console.log(`data ${count++}`);

    setPrompt(event.target.value);
  }
  async function generateResponse(){
    const resp = await axios.post(
      "http://localhost:8000/gen", 
      {
        prompt : prompt
      }

    )

    console.log(resp.data.response)

    // alert(resp.data.response)
    setResponse(resp.data.response)
  }

  // function setResponse(resp){
  //   output = resp
  // }

  return(
    <>
    <div className="main-card">
      <img src={chickenImg} alt="Chicken" width = "50px" />

      <h1>🐔 Chicken AI</h1>
      <h3>Ask me anything!</h3>

      <textarea
        onChange={handleChange}
        placeholder="Enter your prompt..."
      />

      <button onClick={generateResponse}>
        Generate
      </button>

      <div className="AIresponse">
        <h3>Output Response</h3>
        <p>{output}</p>
      </div>
      <br />
      <footer className="footer">
        © {new Date().getFullYear()} Chicken AI. All Rights Reserved.
      </footer>
    </div>
    
      </>
    );
}



export default App