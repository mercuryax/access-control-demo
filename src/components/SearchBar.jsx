import React from 'react';
import Plus from '../images/plus.svg';

const SearchBar = props =>
    <div className="search-bar">
        <img src={Plus} alt="Add Item"/>
        <input type="text" placeholder="Spotlight Search" onChange={props.handleSearch}/>
    </div>;

export default SearchBar;