import React, { Component } from 'react';
import '../styles/WhenToPost.css';
import {Container,Panel, Col, Row, Grid, Jumbotron} from 'react-bootstrap';
import arrow from "../images/arrow.png"

const WhenToPostStats = () => (
  <Grid fluid={true}>
    <Row className="show-grid">
      <Col md={6}>
        <Jumbotron className="jumbotronBig">
          <h1>Wednesday</h1>
          <h1>5:00pm</h1>
        </Jumbotron>
      </Col>
      <Col md={6}>
        <Row className="show-grid">
          <Jumbotron className="jumbotronSmall">
            <div className="cardText">
              <h2>Tuesday</h2>
              <h3>10:00pm</h3>
            </div>
          </Jumbotron>
        </Row>
        <Row>
          <Jumbotron className="jumbotronSmall">
            <div className="cardText">
              <h2>Thursday</h2>
              <h3>7:00pm</h3>
            </div>
          </Jumbotron>
        </Row>
      </Col>
      
    </Row>
  </Grid>
);

export default WhenToPostStats