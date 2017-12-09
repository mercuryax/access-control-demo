import React, {Component} from 'react';
import './App.css';
import Header from '../components/Header';
import AccessPanel from '../components/AccessPanel';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header text="Access Levels"/>
                <AccessPanel/>
            </div>
        );
    }
}

export default App;
