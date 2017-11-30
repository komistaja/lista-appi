import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            nameList: [],
        };
    }

    componentWillMount() {
        fetch('https://mahtikikkare.heroku.com/users?')
            .then(results => {
                console.log(results);
                return results.json();
            }).then(data => {
                let users = data.results.map((user) => {
                    return(<li>{user}</li>)
                });
            this.setState({nameList: users});

        })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>{this.state.nameList}</ul>
      </div>
    );
  }
}

export default App;
