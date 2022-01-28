import "./App.css";
import Recipe from "./Recipe";
import React, { useEffect, useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
    MDBRow,
    MDBContainer,
    MDBNavbar,
    MDBBtn,
    MDBIcon,
} from "mdb-react-ui-kit";
import Footer from "./Footer";

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
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`,
        );
        const data = await response.json();
        setRecipes(data.hits);
    };

    return (
        <div className="App">
            <MDBNavbar light bgColor="light" className="py-4 text-white">
                <MDBContainer className="container">
                    <a className="navbar-brand text-danger fw-bold fs-3">
                        <MDBIcon fas icon="utensils" size="lg" /> &nbsp; Recipes
                        Quick Book
                    </a>
                    <form
                        className="d-flex input-group w-auto"
                        onSubmit={getSearch}
                    >
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search recipes"
                            aria-label="Search"
                            onChange={updateSearch}
                        />
                        <MDBBtn color="primary ">Search</MDBBtn>
                    </form>
                </MDBContainer>
            </MDBNavbar>
            <div className="container">
                <MDBRow className="row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 my-3">
                    {recipes.map((recipe, i) => (
                        <Recipe recipe={recipe} key={i} />
                    ))}
                </MDBRow>
            </div>
            <Footer />
        </div>
    );
}

export default App;
