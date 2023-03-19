import "./SearchPage.css";
import React from 'react';


const SearchPage = (props) => {

    const dropdowns = document.querySelector('.dropdown');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelector('.menu li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click', () => {
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
                options.forEach(option => {
                    option.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    });

    return (
        <div className="container">
            <form action="" className="search-bar">
                <input type="text" placeholder="Search anything" name="q" />
                <button type="submit">
                    <img src="search.png" />
                </button>
            </form>
            <h1>Results</h1>
            <div className="dropdown">
                <div className="select">
                    <span className="selected">Sort By</span>
                    <div className="caret">
                    </div>
                </div>
                <ul className="menu">
                    <li>Calories (Highest to lowest)</li>
                    <li>Calories (Lowest to highest)</li>
                    <li>Protein (Highest to lowest)</li>
                    <li>Protein (Lowest to highest)</li>
                    {/*<li className="active">LOL</li>*/}
                    <li>Fat (Highest to lowest)</li>
                    <li>Fat (Lowest to highest)</li>
                </ul>
            </div>
            <div className="horizontal-line">
            </div>
        </div>
    );
};

export default SearchPage;
