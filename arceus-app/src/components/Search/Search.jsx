import "./Search.css";
import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { set } from "firebase/database";
import { useLocation, useNavigate } from "react-router-dom";
import RecommendedRecipes from "../../components/RecipeCard/RecommendedRecipes";


function Search() {

    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        setSearchTerm(location.state?.searchTerm || "");
    }, [location.state]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            navigate('/searched/' + input, { state: { searchTerm: input }});
        } else {
            setError("Please enter a search term");
        }
    };


    return (
        <>

            <form className="searchForm" onSubmit={submitHandler}>
                <div className="searchInput">
                    <FaSearch></FaSearch>
                    <input
                        onChange={(e) => {
                            setInput(e.target.value);
                            setError("");
                        }}
                        type="text"
                        value={input}
                        placeholder="Search..."
                    />
                    {error && <p className="error">{error}</p>}
                </div>
            </form>
            <RecommendedRecipes />
            {/*
        <RecommendedRecipesLI />
        <RecommendedRecipesLI />
        <RecommendedRecipesLI />
        <RecommendedRecipesLI />
    */}


        </>

    )
}

export default Search