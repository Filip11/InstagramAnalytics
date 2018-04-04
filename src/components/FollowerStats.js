import React, { Component } from 'react';
import '../styles/FollowerGrowth.css';
import {Container,Panel, Col, Row, Grid} from 'react-bootstrap';
import arrow from "../images/arrow.png"

const FollowerStats = () => (
  <div className="FollowerChart">
  {/*
    <Grid>
      <Row>
          <Col className="PostCol">
            <h2>Past Week</h2>
            <span>
              <div>
                <h3>5%</h3>
                <img className='PostImg' src={arrow} />
              </div>
              
            </span>
          </Col>
          <Col className="PostCol" >
            <h2>Past Month</h2>
          </Col>
          <Col className="PostCol" >
            <h2>Past Year</h2>
          </Col>
      </Row>

    </Grid>
  */}
    <Grid>

      <Row className="show-grid">
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
      </Row>

    </Grid>
  </div>
)

export default FollowerStats