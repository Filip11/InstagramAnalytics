import React, { Component } from 'react';
import '../styles/Main.css';
import '../styles/Help.css';
import { Button, Nav, NavItem, Popover, Tooltip, Thumbnail, OverlayTrigger, InputGroup, FormGroup, FormControl, ControlLabel, Panel, Col, Row, Grid, Glyphicon, Modal} from 'react-bootstrap';

import questionmark from '../images/questionmark.png';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import clockWhite from '../images/clock-white.png';
import followerWhite from '../images/many-people-outline-white.png';
import heartWhite from '../images/heart-insta-white.png';

import clockPink from '../images/clock-pink.png';
import followerPink from '../images/many-people-outline-pink.png';
import heartPink from '../images/heart-insta-pink.png';

class Help extends Component {

  constructor(props, context) {
      super(props, context);

      this.state = {
      };
  }

    render() {

      return(
      <div className="Main-background Help-text-left">
        <h1>Help</h1>
        <hr />

        <h3><img src={clockPink} className="Help-img"/>When To Post</h3>
        <p>
        The When To Post page displays the best time to post on a user's Instagram profile. The main graph shows a heat map of the saturation of users. The Best Times To Post lists the best 3 times that are popular during the current week. This page can be accessed from the clock icon in the left-hand side menu.
        </p>
        <p>
        Lorem ipsum dolor sit amet, munere altera ut duo. Cum porro facilisi ad, elitr commune cum et, vis an oblique docendi. Vix homero oporteat cu, sit ex diceret appetere recteque, qui ad reque fastidii voluptatum. Usu ne urbanitas abhorreant, id sit animal vituperata. Vis ex esse dignissim. Id sumo maiorum verterem pri. Vim quaeque diceret oporteat at, sea in labitur dissentias.
        </p>
        <p>
        Id has volumus tractatos, case tation essent ad vix. Ei mel sint feugait, est no tantas vidisse. No cibo wisi forensibus sed, no eos veri movet simul. Quot admodum expetenda vix at, sea te lorem possit oblique. His ad reque graecis, has ei alii ponderum. Nam aliquip complectitur cu, dolorum legendos an cun.
        </p>
        <hr />

        <h3><img src={followerPink} className="Help-img"/>Follower Growth</h3>
        <p>
        The Follower Growth page displays the follower growth and decay of a user's Instagram profile. The main graph shows a line graph base on number of followers. The percentages below lists the growth form the past week, month, and year. This page can be accessed from the muilt-user icon in the left-hand side menu.
        </p>
        <p>
        Recteque facilisis eu duo, an mei mutat habemus insolens. Eu tale labore eos, cum te causae probatus explicari, eu mei omnes partem essent. Ne tacimates omittantur ullamcorper ius, usu ea errem verterem referrentur, pro mundi iracundia neglegentur ut. Ea nec erat accusam similique, mel legendos senserit reformidans te, mei aliquip probatus ne. Habeo causae no vim, et eam quem detracto inciderint, etiam electram conceptam at duo. Per munere sadipscing no, liber appetere constituam no com.
        </p>
        <hr />

        <h3><img src={heartPink} className="Help-img"/>Top Posts</h3>
        <p>
        The Top Posts page displays the top 6 posts from a user's Instagram profile. The top 6 recents posts are listed #1-3 on top row and #4-6 on the bottom row. The posts are clickable to show more information about the post. This includes the post's date, number of like and comments. This page can be accessed from the heart icon in the left-hand side menu.
        </p>
        <p>
        Usu semper contentiones in, an qui tale augue dolorem. An prima recteque est. Cu autem appetere apeirian sed. Dicta prompta bonorum ne sit, est justo facer legendos ea. Id qui veri signiferumque, et vel unum consulatu, an vel fabellas appellantur.
        </p>
        <hr />

      </div>
    );
  }
}

export default Help;