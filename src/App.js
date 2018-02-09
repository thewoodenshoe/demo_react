import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';

const layoutStyle = {
  margin: 10,
  padding: 0,
  border: '1px solid #DDD'
}

class App extends Component {
  render() {
    return (
        <div className="App" style={layoutStyle}>
           <Header />
           <p className="App-intro">
              Welcome
           </p>
        </div>
    );
  }
}

export default App;
