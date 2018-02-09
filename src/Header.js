import React, { Component } from 'react';
import './Header.css';

const layoutStyle = {
  padding: 0,
  borderBottom: '1px solid #DDD'
}

class Header extends Component {
    render() {
        return (
             <div style={layoutStyle}>
                 <a className="App-link" href="/">Home</a>
                 <a className="App-link" href="/Untappd">Untappd</a>
                 <a className="App-link" href="/Profile">Profile</a>
            </div>
        )
    }
}

export default Header;