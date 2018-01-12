import React from 'react';
import SearchBar from './SearchBar';
import Grid from './Grid';

class AccessGrid extends React.Component {

    constructor() {
        super();
        this.state = {
            filteredRows: [],
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.setState({
            filteredRows: this.props.rows
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            filteredRows: nextProps.rows
        });
    }

    handleSearch(e) {

        const searchString = e.target.value;
        this.setState({
            filteredRows: this.props.rows.filter(row => {
                return (
                    row.name.indexOf(searchString) >= 0 ||
                    row.reader.indexOf(searchString) >= 0 ||
                    row.readerType.indexOf(searchString) >= 0
                )
            })
        });
    }

    render() {
        return (
            <div className="access-grid">
                <SearchBar handleSearch={this.handleSearch} handleAddItem={this.props.handleAddItem}/>
                <Grid rows={this.state.filteredRows} handleRowSelect={this.props.handleRowSelect}/>
            </div>
        );
    }
}

export default AccessGrid;