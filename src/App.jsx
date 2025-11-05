import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [dictionary] = useState(
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]);
const handleSearch = () =>{
  if(!query.trim()){
    setResult("Word not found in the dictionary.");
    return;
  }
  const found = dictionary.find((item) => item.word.toLowerCase() == query.trim().toLowerCase());
  if(found){
    setResult(found.meaning);
  }
  else{
    setResult("Word not found in the dictionary.");
  }
}
const onKeyDown = (e) => {
  if(e.key === "Enter") {
    e.preventDefault();
    handleSearch();
  }
}

  return (
   
      <div>
        <h1>Dictionary App</h1>
        <input onChange = {(e) => setQuery(e.target.value)} type = "text" value ={query}  placeholder="Search for a word"
        onKeyDown={onKeyDown}
        />
        <button onClick={handleSearch} >Search</button> 
        <div>
          <h3>Definition:</h3>
          <p>
{result}
          </p>
          </div>     </div>
  )
}

export default App
