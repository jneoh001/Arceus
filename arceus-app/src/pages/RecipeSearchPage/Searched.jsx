import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import "./Searched.css";

function Searched() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    };

    const [SearchedRecipes, setSearchedRecipes] = useState([]);
    const [recipeNutrition, setRecipeNutrition] = useState({});
    const [sortBy, setSortBy] = useState('');

    let params = useParams();
    const apiKey = '4cf4419d29214ccd8eeac75198bf0065';

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}`
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    const getRecipeNutrition = async (id) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}` 
        );
        const nutrition = await data.json();
        setRecipeNutrition((prevState) => {
            return { ...prevState, [id]: nutrition };
        });
    };

    const sortRecipes = (recipes, sortBy) => {
        if (sortBy === 'rating') {
            return recipes.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'calories') {
            return recipes.sort((a, b) => a.calories - b.calories);
        } else if (sortBy === 'alpha') {
            return recipes.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === 'zulu') {
            return recipes.sort((a, b) => b.title.localeCompare(a.title));
        } else {
            return recipes;
        }
    };

    const sortedRecipes = sortRecipes(SearchedRecipes, sortBy);

    useEffect(() => {
        getSearched(params.search);
    }, [params.search])

    useEffect(() => {
        SearchedRecipes.forEach((item) => {
            getRecipeNutrition(item.id);
        });
    }, [SearchedRecipes]);

    

    return (
        <div>
            <Navbar />
            <FormStyle onSubmit={submitHandler}>
                <div>
                    <FaSearch></FaSearch>
                    <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
                </div>
            </FormStyle>
            <div className="searchpageheader">
                <h1>Results</h1>
                <div className="dropdown">
                    {/* Add dropdown menu to select sorting option */}
                    <select onChange={(e) => setSortBy(e.target.value)}>
                        <option value=''>Sort By</option>
                        <option value='rating'>Rating</option>
                        <option value='calories'>Calories</option>
                        <option value='alpha'>A-Z</option>
                        <option value='zulu'>Z-A</option>
                    </select>
                </div>
            </div>

            <div className="recipecards">
                {sortedRecipes.map((item) => {
                    const nutrition = recipeNutrition[item.id];
                    return (

                        <RecipeCard
                            id={item.id}
                            name={item.title}
                            carbs={nutrition?.carbs}
                            protein={nutrition?.protein}
                            fats={nutrition?.fat}
                            calories={nutrition?.calories}
                            img={item.image}
                            rating={5}
                        />
                    );
                })}
            </div>
        </div>
    );
}

{/*
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }
    
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;
*/}

const FormStyle = styled.form`

    div {
        width: 100%;
        position: relative;
    }
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;


export default Searched;