import React, { useEffect, useState } from "react";

import "./App.css";
import Recipe from "./Components/Recipe";

function App() {
  const APP_ID = "a2ba34c1";
  const APP_KEY = "41043c5149a4e795f1c029cbd20995f0";

  const [recipes, setRecipes] = useState([]);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("chicken");


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
    
  };
  const getValue = (e) => {
    setResult(e.target.value);
    
  }
  const useValue = (e) => {
    e.preventDefault();
    setQuery(result);
    setResult('');
   
  }


  return (
    <>
      <div className="App">
        <form className="input-form">
          <input onChange={getValue} type="text" value={result}/>
          <button type="submit" onClick={useValue}>Search</button>
        </form>
<div className="content">
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
        ))}
        </div>
      </div>
      
        
    </>
  );
}

export default App;
