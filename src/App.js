import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    name: 'Gabriel'
  }
  render() {
    return (
      <div className="App">
       <h1>{this.state.cohortName} Learns State </h1>
    <h2>{this.state.salutation} my name is {this.state.name}</h2>
      </div>
    );
  }
}

export default App;
