import React, { Component } from 'react';
import '../styles/WhenToPost.css';
import HeatMap from "react-heatmap-grid"
import CalendarHeatmap from 'reactjs-calendar-heatmap'
import WhenToPostStats from './WhenToPostStats.js'
import {Container,Panel, Col, Row, Grid} from 'react-bootstrap';


/*

const xLabels = new Array(24).fill(0).map((_, i) => `${i+":00"}`);
const yLabels = ['Mon', 'Tue','Wed','Thu','Fri','Sat','Sun'];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));
 */
 const data = [{
  "date": "2017-01-01",
  "total": 14400,
  "details": [{
    "name": "Monday",
    "date": "2017-01-01 12:00:00",
    "value": 3600
  },
  {
    "name": "Monday",
    "date": "2017-01-01 12:00:00",
    "value": 3600
  },
  {
    "name": "Monday",
    "date": "2017-01-01 12:00:00",
    "value": 14400
  },
    {
    "name": "Monday",
    "date": "2017-01-01 12:00:00",
    "value": 7200
  },
  {
    "name": "Monday",
    "date": "2017-01-01 18:00:00",
    "value": 3600
  },
  {
    "name": "Monday",
    "date": "2017-01-01 10:00:00",
    "value": 3600
  },
  {
    "name": "Monday",
    "date": "2017-01-01 8:00:00",
    "value": 3600
  },
  {
    "name": "Monday",
    "date": "2017-01-01 5:30:00",
    "value": 7900
  },
  {
    "name": "Tuesday",
    "date": "2017-01-01 12:30:00",
    "value": 3600
  },
  {
    "name": "Tuesday",
    "date": "2017-01-01 10:00:00",
    "value": 10800
  },
  {
    "name": "Tuesday",
    "date": "2017-01-01 14:30:00",
    "value": 3600
  },
  {
    "name": "Tuesday",
    "date": "2017-01-01 22:00:00",
    "value": 3600
  },
  {
    "name": "Tuesday",
    "date": "2017-01-01 16:30:00",
    "value": 3600
  },
   {
     "name": "Tuesday",
     "date": "2017-01-01 22:30:00",
     "value": 3600
   },
   {
     "name": "Tuesday",
     "date": "2017-01-01 22:00:00",
     "value": 3600
   },
   {
     "name": "Tuesday",
     "date": "2017-01-01 22:10:00",
     "value": 3600
   },
   {
     "name": "Tuesday",
     "date": "2017-01-01 21:30:00",
     "value": 3600
   },
   {
     "name": "Tuesday",
     "date": "2017-01-01 21:40:00",
     "value": 3600
   },
  {
    "name": "Wednesday",
    "date": "2017-01-01 13:30:00",
    "value": 3600
  },
  {
    "name": "Wednesday",
    "date": "2017-01-01 12:30:00",
    "value": 3600
  },
  {
    "name": "Wednesday",
    "date": "2017-01-01 6:30:00",
    "value": 3600
  },
  {
    "name": "Wednesday",
    "date": "2017-01-01 16:30:00",
    "value": 3600
  },
  {
    "name": "Wednesday",
    "date": "2017-01-01 17:30:00",
    "value": 3600
  },
  {
    "name": "Wednesday",
    "date": "2017-01-01 17:00:00",
    "value": 3600
  },
  {
    "name": "Wednesday",
    "date": "2017-01-01 17:10:00",
    "value": 3600
  },
  {
    "name": "Wednesday",
    "date": "2017-01-01 17:00:00",
    "value": 3600
  },
  {
    "name": "Wednesday",
    "date": "2017-01-01 17:20:00",
    "value": 3600
  },
  {
    "name": "Thursday",
    "date": "2017-01-01 13:30:00",
    "value": 3600
  },
  {
    "name": "Thursday",
    "date": "2017-01-01 18:30:00",
    "value": 3600
  },
  {
    "name": "Thursday",
    "date": "2017-01-01 19:35:00",
    "value": 3600
  },
  {
    "name": "Thursday",
    "date": "2017-01-01 18:30:00",
    "value": 3600
  },
  {
    "name": "Thursday",
    "date": "2017-01-01 21:30:00",
    "value": 3600
  },
  {
    "name": "Thursday",
    "date": "2017-01-01 19:30:00",
    "value": 3600
  },
  {
    "name": "Thursday",
    "date": "2017-01-01 20:30:00",
    "value": 3600
  },
  {
    "name": "Thursday",
    "date": "2017-01-01 19:30:00",
    "value": 3600
  },
  {
    "name": "Thursday",
    "date": "2017-01-01 19:00:00",
    "value": 3600
  },
   {
    "name": "Friday",
    "date": "2017-01-01 13:00:00",
    "value": 3600
  },
   {
    "name": "Friday",
    "date": "2017-01-01 14:00:00",
    "value": 3600
  },
   {
    "name": "Friday",
    "date": "2017-01-01 10:30:00",
    "value": 3600
  },
  {
    "name": "Friday",
    "date": "2017-01-01 10:00:00",
    "value": 3600
  },
  {
    "name": "Friday",
    "date": "2017-01-01 11:00:00",
    "value": 3600
  },
  {
    "name": "Friday",
    "date": "2017-01-01 10:00:00",
    "value": 3600
  },
  {
    "name": "Friday",
    "date": "2017-01-01 17:00:00",
    "value": 3600
  },
  {
    "name": "Friday",
    "date": "2017-01-01 16:30:00",
    "value": 3600
  },
  {
    "name": "Friday",
    "date": "2017-01-01 17:30:00",
    "value": 3600
  },
  {
    "name": "Saturday",
    "date": "2017-01-01 13:30:00",
    "value": 3600
  },
  {
    "name": "Saturday",
    "date": "2017-01-01 10:30:00",
    "value": 3600
  },
  {
    "name": "Saturday",
    "date": "2017-01-01 8:30:00",
    "value": 3600
  },
  {
    "name": "Saturday",
    "date": "2017-01-01 16:30:00",
    "value": 3600
  },
  {
    "name": "Saturday",
    "date": "2017-01-01 6:30:00",
    "value": 7200
  },
  {
    "name": "Saturday",
    "date": "2017-01-01 15:30:00",
    "value": 3600
  },
  {
    "name": "Sunday",
    "date": "2017-01-01 17:00:00",
    "value": 3600
  },
  {
    "name": "Sunday",
    "date": "2017-01-01 10:00:00",
    "value": 7200
  },
  {
    "name": "Sunday",
    "date": "2017-01-01 15:00:00",
    "value": 3600
  },
  {
    "name": "Sunday",
    "date": "2017-01-01 2:00:00",
    "value": 3600
  }]
}]
const WhenToPost = () => (

{/*
  <HeatMap
    xLabels={xLabels}
    yLabels={yLabels}
    data={data}
    background="#e1306c"
    height={50}
  />
)
*/},
  <div className = "heatChart">
    <div className="subtitle">
      <h1>When To Post</h1>
    </div>
    <CalendarHeatmap
      data={data}
      color={"#e1306c"}
      overview={'day'}
      handler={null}>
    </CalendarHeatmap>
    
    <Grid fluid={true}>
    <Row>
      <div className="subtitle">
        <h2>Best Times To Post</h2>
      </div> 
    </Row>
      <Row>
        <WhenToPostStats />
      </Row>
    </Grid>
  </div>
)
export default WhenToPost