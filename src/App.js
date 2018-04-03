import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/Main.css';

import SignIn from './components/SignIn/SignIn.js';
import TopPosts from './components/TopPosts/TopPosts.js';
import SideMenu from './components/SideMenu/SideMenu.js';

import { Button, Popover, Tooltip, Thumbnail, OverlayTrigger, InputGroup, FormGroup, FormControl, ControlLabel, Panel, Col, Row, Grid, Glyphicon, Modal} from 'react-bootstrap';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="App-content">
        <Grid fluid={true}>
          <Col>
            <div className="Inline">
              <SideMenu selectedPage={this.sideMenuCallback} />
            </div>
            <div className="Inline">
                {appContents}
            </div>
          </Col>
        </Grid>
        </div>

        <SignIn />
        
      </div>
      
        
      
    );
  }
}

export default App;
