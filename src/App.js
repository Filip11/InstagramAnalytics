import React, { Component } from 'react';
import logo from './Instagram_simple_icon.svg';
import './App.css';
import FollowerGrowth from './components/FollowerGrowth'
import WhenToPost from './components/WhenToPost'
//import node from './components/WhenToPostD3';
import HeatMap from 'react-heatmap-grid';
import ReactTooltip from 'react-tooltip'
import SideNav from './components/sideMenu'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import whiteheart from "./images/heart-insta-pink.png"
import pinkheart from "./images/heart-insta-pink.png"
import clockWhite from "./images/clock-white.png"
import clockPink from "./images/clock-pink.png"



class App extends Component {
  render() {
    return (

      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
        </header>
        <SideNav />
        <FollowerGrowth />
        <WhenToPost />
      </div>
      */
      <Router>
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
        
        <ul>

          <li>
            <Link to="/FollowerGrowth"><img src={pinkheart} className="App-logo" alt="logo"/></Link>
          </li>
          <li>
            <Link to="/WhenToPost"><img src={clockPink} className="App-logo" alt="logo"/></Link>
          </li>
        </ul>
        <Route path="/FollowerGrowth" component={FollowerGrowth} />
        <Route path="/WhenToPost" component={WhenToPost} />
        </header>
        <SideNav />
      </div>

    </Router>
      
    );
    
  }

}


export default App;
