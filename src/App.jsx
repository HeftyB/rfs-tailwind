import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

import "tailwindcss/tailwind.css"; // include tailwind directly in js file
import "./App.css";

class App extends Component {
    constructor(props) {
        super()
        this.state = {
            testing:"test"
        }
    }
    
    render() {
        return(
            <div className="App">
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default hot(App);