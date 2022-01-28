import "./App.css";
import Recipe from "./Recipe";
import React, { useEffect, useState } from "react";
import { chickenRecipes } from "./data";

function App() {
    const APP_ID = "9ff9907e";
    const APP_KEY = "5bbb169f315caac2938d5ae22db0873f";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
        );
        const data = await response.json();
        setRecipes(data.hits);
    };

    return (
        <div className="App">
            <form className="search-form" onSubmit={getSearch}>
                <input
                    type="text"
                    className="search-bar"
                    value={search}
                    onChange={updateSearch}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map((recipe, i) => (
                    <Recipe recipe={recipe} key={i} />
                ))}
            </div>
        </div>
    );
}

export default App;
