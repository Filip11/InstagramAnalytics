import React, { Component } from 'react';
import '../../styles/Main.css';
import '../../styles/SideMenu.css';
import { Button, Nav, NavItem, Popover, Tooltip, Thumbnail, OverlayTrigger, InputGroup, FormGroup, FormControl, ControlLabel, Panel, Col, Row, Grid, Glyphicon, Modal} from 'react-bootstrap';

import kitty from '../../images/kitty2.jpg';

import clockWhite from '../../images/clock-white.png';
import followerWhite from '../../images/many-people-outline-white.png';
import heartWhite from '../../images/heart-insta-white.png';

import clockPink from '../../images/clock-pink.png';
import followerPink from '../../images/many-people-outline-pink.png';
import heartPink from '../../images/heart-insta-pink.png';
import questionmark from '../../images/questionmark.png';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SideMenu extends Component {

  constructor(props, context) {
      super(props, context);

      this.handleSelect = this.handleSelect.bind(this);

      this.state = {
        show: false,
        postNumber: 1,
        clock : true,
        follower: false,
        heart: false,
        height: undefined
      };
  }

  handleResize = () => this.setState({
    height: window.innerHeight
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleSelect(selectedKey) {
    //alert(`selected ${selectedKey}`);
    this.props.selectedPage(selectedKey);

    if (selectedKey == 1){
        console.log("in 1");
        this.setState({ 
          clock: true,
          follower: false,
          heart: false
         });
    }else if (selectedKey == 2){
      console.log("in 2");
        this.setState({ 
          follower: true
         }, function () {
    console.log('follower' + this.state.follower);
});
    }else if (selectedKey == 3){
        this.setState({ 
          clock: false,
          follower: false,
          heart: true
         });
    }else if (selectedKey == 4){
        this.setState({ 
          clock: false,
          follower: false,
          heart: false
         });
    }
    this.forceUpdate();
    console.log(this.state.clock);
  }

    render() {

      const clock = this.state.clock;
      const follower = this.state.follower;
      const heart = this.state.heart;

      const heightStyle = { height: this.state.height };

      return(
        <div className="side-menu" style={heightStyle}>
          <Nav bsStyle="pills" stacked onSelect={this.handleSelect} className="nav" >
            <NavItem eventKey={1} title="When To Post" className="nav-item">
              <Link to="/WhenToPost"><img className="nav-img" src={this.state.clock? clockPink: clockWhite} /> </Link>
            </NavItem>
            <NavItem eventKey={2} title="Follower Growth" className="nav-item">
              <Link to="/FollowerGrowth"><img className="nav-img" src={this.state.follower? followerPink: followerWhite} /> </Link>
            </NavItem>
            <NavItem eventKey={3} title="Top Posts" className="nav-item">
              <Link to="/TopPosts"><img className="nav-img" src={this.state.heart? heartPink: heartWhite} /></Link>
            </NavItem>
            <NavItem eventKey={4} title="Help" className="nav-item">
              <Link to="/Help"><img className="nav-img" src={questionmark}/></Link>
            </NavItem>
          </Nav>



      </div>
    );
  }
}

export default SideMenu;