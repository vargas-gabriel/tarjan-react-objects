import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    user: {
      name: 'Gabriel',
    whereILive: 'Loring Park',
    sport: 'soccer'
    }
  }
  render() {
    return (
      <div>
       <h1>{this.state.cohortName} Learns State </h1>
    <h2>{this.state.salutation} my name is {this.state.name}</h2>
    <ul>
    <li>My name is {this.state.user.name}</li>
    <li>I live in {this.state.user.whereILive}</li>
    <li>I play {this.state.user.sport}</li>
    </ul>
      </div>
    );
  }
}

export default App;
