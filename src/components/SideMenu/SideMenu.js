import React, { Component } from 'react';
import '../../styles/Main.css';
import '../../styles/SideMenu.css';
import { Button, Nav, NavItem, Popover, Tooltip, Thumbnail, OverlayTrigger, InputGroup, FormGroup, FormControl, ControlLabel, Panel, Col, Row, Grid, Glyphicon, Modal} from 'react-bootstrap';

import kitty from '../../images/kitty2.jpg';

import clockWhite from '../../images/clock-white.png';
import followerWhite from '../../images/many-people-outline-white.png';
import heartWhite from '../../images/heart-insta-white.png';

class SideMenu extends Component {

  constructor(props, context) {
      super(props, context);

      this.handleSelect = this.handleSelect.bind(this);

      this.state = {
        show: false,
        postNumber: 1
      };
  }

  handleSelect(selectedKey) {
    //alert(`selected ${selectedKey}`);
    this.props.selectedPage(selectedKey);
  }

    render() {
      return(
        <div className="side-menu">
          <Nav bsStyle="pills" stacked onSelect={this.handleSelect} className="nav" >
            <NavItem eventKey={1} title="When To Post" className="nav-item">
              <img className="nav-img" src={clockWhite} /> 
            </NavItem>
            <NavItem eventKey={2} title="Follower Growth" className="nav-item">
              <img className="nav-img" src={followerWhite} /> 
            </NavItem>
            <NavItem eventKey={3} title="Top Posts" className="nav-item">
              <img className="nav-img" src={heartWhite} />
            </NavItem>
          </Nav>
      </div>
    );
  }
}

export default SideMenu;