import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
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