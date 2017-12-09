import React from 'react';
import SearchBar from './SearchBar';
import Grid from './Grid';

const AccessGrid = props =>
    <div className="access-grid">
        <SearchBar/>
        <Grid rows={props.rows} handleRowSelect={props.handleRowSelect}/>
    </div>;

export default AccessGrid;