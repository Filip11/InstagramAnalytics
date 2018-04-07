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

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SideMenu extends Component {

  constructor(props, context) {
      super(props, context);

      this.handleSelect = this.handleSelect.bind(this);

      this.state = {
        show: false,
        postNumber: 1,
        clock : clockPink,
        follower: followerWhite,
        heart: heartWhite,
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
        this.setState({ 
          clock: clockPink,
          follower: followerWhite,
          heart: heartWhite
         });
    }else if (selectedKey == 2){
        this.setState({ 
          clock: clockWhite,
          follower: followerPink,
          heart: heartWhite
         });
    }else if (selectedKey == 3){
        this.setState({ 
          clock: clockWhite,
          follower: followerWhite,
          heart: heartPink
         });
    }
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
              <Link to="/WhenToPost"><img className="nav-img" src={clock} /> </Link>
            </NavItem>
            <NavItem eventKey={2} title="Follower Growth" className="nav-item">
              <Link to="/FollowerGrowth"><img className="nav-img" src={follower} /> </Link>
            </NavItem>
            <NavItem eventKey={3} title="Top Posts" className="nav-item">
              <Link to="/TopPosts"><img className="nav-img" src={heart} /></Link>
            </NavItem>
          </Nav>
      </div>
    );
  }
}

export default SideMenu;