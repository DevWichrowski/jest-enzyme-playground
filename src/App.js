import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }

  render() {
    const incrementValue = () =>{
     this.setState({value: this.state.value + 1});
    }

    return (
      <div className="App" data-test='component-app'>
        <h1 data-test='counter-display'>Current value: {this.state.value}</h1>
        <button onClick={() => incrementValue()} data-test='increment-button'>Click</button>
      </div>
    );
  }
}

export default App;
