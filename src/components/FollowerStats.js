import React, { Component } from 'react';
import '../styles/FollowerGrowth.css';
import {Container,Panel, Col, Row, Grid, Jumbotron} from 'react-bootstrap';
import arrow from "../images/arrow.png"
import '../styles/Main.css'

const FollowerStats = () => (
  <div className="FollowerChart">
    <Grid>

      <Row className="show-grid">
      <Jumbotron className="jumbotronStat">
        <div className="tronText">
        <Col xs={6} md={4}>
          <h2>Past Week</h2>
          <h3>2% <img className='PostImg' src={arrow} /></h3>

        </Col>
        <Col xs={6} md={4}>
          <h2>Past Month</h2>
          <h3>5% <img className='PostImg' src={arrow} /></h3>
        </Col>
        <Col xsHidden md={4}>
          <h2>Past Year</h2>
          <h3>10% <img className='PostImg' src={arrow} /></h3>
        </Col>
        </div>
      </Jumbotron>
      </Row>

    </Grid>
  </div>
)

export default FollowerStats