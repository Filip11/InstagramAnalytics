import React, { Component } from 'react';
import logo from './images/analyticslogo.png';
import './App.css';
import './styles/Main.css';

import SignIn from './components/SignIn/SignIn.js';
import TopPosts from './components/TopPosts/TopPosts.js';
import SideMenu from './components/SideMenu/SideMenu.js';

import { Button, Popover, Tooltip, Thumbnail, OverlayTrigger, InputGroup, FormGroup, FormControl, ControlLabel, Panel, Col, Row, Grid, Glyphicon, Modal} from 'react-bootstrap';

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
import userIcon from "./images/maleuser.png"

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.handlePageSelection = this.handlePageSelection.bind(this);

    this.state = {
      pageIndex: 0,
      currentPage: (<SignIn />)
    };
  }

  sideMenuCallback = (index) => {
        this.setState({ pageIndex: index});
        console.log(index);
        if (this.state.pageIndex == 3){
        this.setState({ currentPage: (<TopPosts />) });
    }
    }

  handlePageSelection(){
    console.log("onClick");
    if (this.state.pageIndex == 3){
        this.setState({ currentPage: (<TopPosts />) });
    }
  }

  render() {

    const appContents = this.state.currentPage;

    return (

      <Router className="router">
      <div className="App">
        <header className="App-header">
          <div className="top-title Inline">
              <img className="App-logo Inline" src={logo}/>
              <div className="App-VerticalLine Inline"></div>
              <div className="text-left Inline">
                <div>Instagram</div>
                <div>Analytics</div>
              </div>
              </div>
            <div className="App-username">
              <div className="vertical-text">
                @JohnDoe1234
              </div>
              <img className="App-user-icon" src={userIcon}/>
            </div>
        </header>

        <div className="App-content">

            <div className="App-Inline App-side-menu">
              <SideMenu selectedPage={this.sideMenuCallback} />
            </div>
            <div className="App-Inline App-page">
                <Route path="/WhenToPost" component={WhenToPost} />
                <Route path="/FollowerGrowth" component={FollowerGrowth} />
                <Route path="/TopPosts" component={TopPosts} />
            </div>
        </div>

       {
        /*uncomment do display signin page, to be fixed for demo*/
        /*<SignIn />*/
        /*<FollowerGrowth />*/
     }
      </div>
      </Router>



      /*

      <Router>
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
        
        <ul className="App">
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
       { <SideNav /> }
      </div>

    </Router>
      */
    );
    
  }

}


export default App;
