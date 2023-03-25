import "./Search.css";
import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import RecommendedRecipesLI from '../../components/RecipeCard/RecommendedRecipesLI';

    
function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    };
    return (
        <>
        <form className="searchForm" onSubmit={submitHandler}>
            <div className="searchInput">
                <FaSearch></FaSearch>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={input} />
            </div>
        </form>
        {/* <RecommendedRecipesLI /> */}
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