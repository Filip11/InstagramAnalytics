import React, { Component } from 'react';
import logo from './Instagram_simple_icon.svg';
import './App.css';
import FollowerGrowth from './components/FollowerGrowth'
import WhenToPost from './components/WhenToPost'
//import node from './components/WhenToPostD3';
import HeatMap from 'react-heatmap-grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h1 className = "colorTest">Hello World</h1>
          <h1 className = "colorTest1">Hello World</h1>
          <h1 className = "colorTest2">Hello World</h1>
        </header>
        <FollowerGrowth /> 
        <WhenToPost />
      </div>

      
    );
  }
}


export default App;
