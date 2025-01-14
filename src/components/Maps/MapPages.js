import React, { Component } from 'react';
import './Map.css';
import Map from './Map.js';
import ThemeSelector from './ThemeSelector.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'normal.day',
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(evt) {
        evt.preventDefault();

        var change = evt.target.id;
        console.log('selected ' + change);
        this.setState({
            "theme": change,
        });
    }

    render() {
        return (
            <div className="App">
                <Map
                    app_id="5OG7OkbY9XpgvRPABdnF"
                    app_code="IhfB_irYGjdbpNEyVwLgcr-pBgBZF490CcZNGJldCyA"
                    lat="42.345978"
                    lng="-83.0405"
                    zoom="12"
                    theme={ this.state.theme }
                />
                <ThemeSelector changeTheme={ this.onChange } />
            </div>
        );
    }
}

export default App;

