import React, { Component } from 'react';
import logo from './images/analyticslogo.png';
import './App.css';
import './styles/Main.css';

import SignIn from './components/SignIn/SignIn.js';
import TopPosts from './components/TopPosts/TopPosts.js';
import SideMenu from './components/SideMenu/SideMenu.js';
import Help from './components/Help.js';

import { Button, Popover, Tooltip, Thumbnail, OverlayTrigger, InputGroup, FormGroup, FormControl, ControlLabel, Panel, Col, Row, Grid, Glyphicon, Modal} from 'react-bootstrap';

import FollowerGrowth from './components/FollowerGrowth';
import WhenToPost from './components/WhenToPost';
//import node from './components/WhenToPostD3';
import HeatMap from 'react-heatmap-grid';

import ReactTooltip from 'react-tooltip';
import SideNav from './components/sideMenu';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import whiteheart from "./images/heart-insta-pink.png";
import pinkheart from "./images/heart-insta-pink.png";
import clockWhite from "./images/clock-white.png";
import clockPink from "./images/clock-pink.png";
import userIcon from "./images/maleuser.png";

import TransitionGroup from "react-transition-group/TransitionGroup";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.handlePageSelection = this.handlePageSelection.bind(this);

    this.state = {
      pageIndex: 0,
      currentPage: (<SignIn />),
      signIn: true
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

    let SignInContainer = () => (
      <div>
        <Route path="/" component={SignIn} />
      </div>
    )

     let DefaultContainer = () => (
        <div>
        {topBar}
          <div className="App-content">

            <div className="App-Inline App-side-menu">
              <SideMenu selectedPage={this.sideMenuCallback} />
            </div>

            <div className="App-Inline App-page">
                <Route path="/WhenToPost" component={WhenToPost} />
                <Route path="/FollowerGrowth" component={FollowerGrowth} />
                <Route path="/TopPosts" component={TopPosts} />
                <Route path="/Help" component={Help} />
            </div>
        </div>
        </div>
     )

    const topBar = (
      <header className="App-header">
      <div className="top-title Inline">
        <img className="App-logo Inline" src={logo}/>
        <div className="App-VerticalLine Inline"></div>
        <div className="text-left Inline">
          <div>Instagram Analytics</div>
        </div>
      </div>
      <div className="App-username">
        <div className="vertical-text">
          @JohnDoe1234
        </div>
        <img className="App-user-icon" src={userIcon}/>
      </div>
      </header>
      );

    return (

      <Router className="router">
      <div className="App">
      <Switch>
        <Route exact path="/" component={SignInContainer}/>
        <Route component={DefaultContainer}/>
      </Switch>
      </div>
      </Router>

    );
    
  }

}


export default App;
