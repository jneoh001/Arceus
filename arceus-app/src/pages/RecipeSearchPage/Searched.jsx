import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import RecipePage from '../../components/RecipePage/RecipePage'
import SearchPageByID from '../../components/Search/SearchPageByID'
import Search from '../../components/Search2/Search';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Searched.css';


function Searched() {

    const [SearchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
        'https://api.spoonacular.com/recipes/complexSearch?apiKey=7f8b79cf24094b52953b2d594e02f04e&query=${name}'
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    },[params.search])

    return (

        <div>
            <Navbar />
            <div className="recipecards">
                <div className="recipeGrid">
                <Grid>
                    {SearchedRecipes.map((item) => {
                        return (
                            <div class="recipeCard">
                            <Card key={item.id}>
                                <img src={item.image} alt="" />
                                <h4>{item.title}</h4>
                            </Card>
                            </div>
                        );
                    })}
                </Grid>
                </div>
            </div>
        </div>
    );
}


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


export default Searched;