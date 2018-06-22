import React, { Component } from 'react';
import logo from './logo.svg';
import userico from './user.svg'
import './App.css';
import UserList from './UserList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={userico} className="App-logo" alt="logo" />
          <h1 className="App-title">User MGMT</h1>
        </header>
        <div className="content">
          <UserList />
        </div>
      </div>
    );
  }
}

export default App;
