import React from 'react';
import Plus from '../images/plus.svg';

const SearchBar = () =>
    <div className="search-bar">
        <img src={Plus} alt="Add Item"/>
        <input type="text" placeholder="Spotlight Search"/>
    </div>;

export default SearchBar;